'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const initial = {
  name: '',
  email: '',
  wechat: '',
  company: '',
  stage: 'landed',
  applicants: '1',
  note: '',
  website: '',
};

export default function AssessmentForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setMessage('');
    try {
      const res = await fetch('/api/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        return;
      }
      const data = await res.json().catch(() => ({}));
      setStatus('error');
      setMessage(
        res.status === 429 ? '提交过于频繁，请稍后再试。' : (data.error as string) || '提交失败，请稍后再试或直接发邮件。',
      );
    } catch {
      setStatus('error');
      setMessage('网络错误，请稍后再试或直接发邮件 info@rvlfunding.com。');
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success" role="status">
        <h3>已收到</h3>
        <p>我们会在 1 个工作日内回复可排的时间与付款方式。确认邮件已发到你填写的邮箱，请查收（含垃圾邮件夹）。</p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label>
          <span>姓名 *</span>
          <input name="name" required value={form.name} onChange={update('name')} autoComplete="name" />
        </label>
        <label>
          <span>邮箱 *</span>
          <input name="email" type="email" required value={form.email} onChange={update('email')} autoComplete="email" />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>微信号</span>
          <input name="wechat" value={form.wechat} onChange={update('wechat')} />
        </label>
        <label>
          <span>公司 / 行业</span>
          <input name="company" value={form.company} onChange={update('company')} placeholder="例：电动车制造，国内 120 人" />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>你现在的阶段</span>
          <select name="stage" value={form.stage} onChange={update('stage')}>
            <option value="thinking">计划成立公司 / 工厂 / 仓库</option>
            <option value="landed">已设点，老板在国内，美国没有统筹的人</option>
            <option value="quoted">想过移民的事，两年没动</option>
            <option value="renewal">面临延期 / EB-1C / 续保</option>
          </select>
        </label>
        <label>
          <span>申请人数</span>
          <select name="applicants" value={form.applicants} onChange={update('applicants')}>
            <option value="1">1 人（$300 起）</option>
            <option value="2">2 人或含配偶子女（另报）</option>
          </select>
        </label>
      </div>
      <label>
        <span>想先说的事（可选）</span>
        <textarea name="note" rows={4} value={form.note} onChange={update('note')} placeholder="不需要发任何证件。一两句话说你卡在哪里就行。" />
      </label>
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={update('website')}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
      />
      <button type="submit" className="btn-primary" disabled={status === 'loading'}>
        {status === 'loading' ? '提交中…' : '预约路径评估'}
      </button>
      {status === 'error' && (
        <p className="form-error" role="alert">
          {message}
        </p>
      )}
      <p className="form-fine">提交后 1 个工作日内回复排期与付款方式；付款后排期。评估报告为书面方案，任何申请结果由主管机关决定。</p>
    </form>
  );
}
