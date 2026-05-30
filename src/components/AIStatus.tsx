'use client';

import { useEffect, useState } from 'react';
import { getAIStatus } from '../lib/client';

export function AIStatus() {
  const [ai, setAi] = useState<{ aiEnabled: boolean; model: string } | null>(null);

  useEffect(() => {
    getAIStatus().then(setAi);
  }, []);

  if (!ai) {
    return (
      <span className="ai-status off">
        <span className="dot" /> Memeriksa mesin AI…
      </span>
    );
  }
  return ai.aiEnabled ? (
    <span className="ai-status on">
      <span className="dot" /> AI aktif · {ai.model}
    </span>
  ) : (
    <span className="ai-status off">
      <span className="dot" /> Mode demo · atur ANTHROPIC_API_KEY untuk AI penuh
    </span>
  );
}
