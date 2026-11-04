'use client';

import { useState } from 'react';
import { ASSESS } from '../content';

type Answer = '1' | '0' | null;

function resultFor(answers: Answer[]) {
  const r = ASSESS.results;
  const answered = answers.filter((a) => a !== null).length;
  const biz = answers.slice(0, 3).includes('1');
  const fam = answers.slice(3).includes('1');
  if (!answered) return r.empty;
  if (biz && fam) return r.both;
  if (biz) return r.business;
  if (fam) return r.family;
  if (answered < answers.length) return { title: r.partial.title, text: r.partial.text.replace('{n}', String(answered)) };
  return r.none;
}

export function SelfAssessment() {
  const [answers, setAnswers] = useState<Answer[]>(() => ASSESS.questions.map(() => null));
  const result = resultFor(answers);

  function set(i: number, v: Answer) {
    setAnswers((prev) => prev.map((a, j) => (j === i ? v : a)));
  }

  return (
    <section className="band assess" id="assess">
      <div className="wrap grid">
        <div>
          <div className="eyebrow">{ASSESS.eyebrow}</div>
          <h2 className="h2">{ASSESS.title}</h2>
          <p className="lead">{ASSESS.lead}</p>
          <div className="result" aria-live="polite">
            <div className="k">建议起点</div>
            <h3>{result.title}</h3>
            <p>{result.text}</p>
          </div>
          <p className="fine">{ASSESS.fine}</p>
        </div>
        <form className="qs" onSubmit={(e) => e.preventDefault()}>
          {ASSESS.questions.map((q, i) => (
            <fieldset className="q" key={q}>
              <legend className="sr-only">第 {i + 1} 题</legend>
              <p>{q}</p>
              <div className="yn">
                <label>
                  <input type="radio" name={`q${i + 1}`} value="1" checked={answers[i] === '1'} onChange={() => set(i, '1')} />
                  <span>是</span>
                </label>
                <label>
                  <input type="radio" name={`q${i + 1}`} value="0" checked={answers[i] === '0'} onChange={() => set(i, '0')} />
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
