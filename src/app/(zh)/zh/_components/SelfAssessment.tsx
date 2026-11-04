'use client';

import { useState } from 'react';
import { ASSESS, BOOKING } from '../content';

type Answer = boolean | null;

/** 按五道硬性门槛题给出建议起点；全部作答后才显示结论。 */
function resultFor(a: Answer[]) {
  const r = ASSESS.results;
  const answered = a.filter((x) => x !== null).length;
  if (!answered) return { ...r.empty, missing: [] as string[], child: false };
  if (answered < a.length) {
    return { title: r.progress.title, text: r.progress.text.replace('{n}', String(answered)), missing: [], child: false };
  }
  const [entity, revenue, tenure, relation, child] = a;
  const missing: string[] = [];
  if (!tenure) missing.push(ASSESS.missing.tenure);
  if (!relation) missing.push(ASSESS.missing.relation);
  const base = !entity ? r.noEntity : missing.length ? r.gap : revenue ? r.ready : r.scale;
  return { ...base, missing: entity ? missing : [], child: Boolean(child) };
}

export function SelfAssessment({ headingLevel = 2 }: { headingLevel?: 2 | 3 }) {
  const [answers, setAnswers] = useState<Answer[]>(() => ASSESS.questions.map(() => null));
  const result = resultFor(answers);
  const H = headingLevel === 2 ? 'h2' : 'h3';
  const done = answers.every((x) => x !== null);

  function set(i: number, v: boolean) {
    setAnswers((prev) => prev.map((x, j) => (j === i ? v : x)));
  }

  return (
    <section className="band assess" id="assess" aria-labelledby="assess-title">
      <div className="wrap grid">
        <div>
          <div className="eyebrow">{ASSESS.eyebrow}</div>
          <H className="h2" id="assess-title">
            {ASSESS.title}
          </H>
          <p className="lead">{ASSESS.lead}</p>
          <div className="result" aria-live="polite">
            <div className="k">建议起点</div>
            <p className="r-title">{result.title}</p>
            <p>{result.text}</p>
            {result.missing.length ? (
              <ul>
                {result.missing.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            ) : null}
            {result.child ? <p className="note">{ASSESS.childNote}</p> : null}
            {done ? (
              <a className="btn btn-gold" href={BOOKING.assessment}>
                {ASSESS.cta}
              </a>
            ) : null}
          </div>
          <p className="fine">{ASSESS.fine}</p>
        </div>
        <form className="qs" onSubmit={(e) => e.preventDefault()}>
          {ASSESS.questions.map((q, i) => (
            <fieldset className="q" key={q.id}>
              <legend className="sr-only">第 {i + 1} 题</legend>
              <p>{q.text}</p>
              <div className="yn">
                <label>
                  <input type="radio" name={q.id} value="yes" checked={answers[i] === true} onChange={() => set(i, true)} />
                  <span>是</span>
                </label>
                <label>
                  <input type="radio" name={q.id} value="no" checked={answers[i] === false} onChange={() => set(i, false)} />
                  <span>否</span>
                </label>
              </div>
            </fieldset>
          ))}
        </form>
      </div>
    </section>
  );
}
