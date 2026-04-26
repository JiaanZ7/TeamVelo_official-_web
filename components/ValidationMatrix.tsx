"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { validationRows } from "@/data/siteContent";

export function ValidationMatrix() {
  const [openId, setOpenId] = useState(validationRows[0].id);

  return (
    <div className="matrix">
      {validationRows.map((row) => {
        const open = row.id === openId;
        return (
          <article className="validation-row" key={row.id}>
            <button
              className="validation-button"
              type="button"
              onClick={() => setOpenId(open ? "" : row.id)}
              aria-expanded={open}
            >
              <strong>{row.test}</strong>
              <span className="validation-result">{row.result}</span>
              {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            {open ? (
              <div className="validation-detail">
                <p>
                  <strong>Version:</strong> {row.version}
                </p>
                <p>
                  <strong>Evidence:</strong> {row.evidence}
                </p>
                <p>
                  <strong>Why it matters:</strong> {row.why}
                </p>
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
