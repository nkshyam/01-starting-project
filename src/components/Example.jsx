import { EXAMPLES } from "../data";
import TabButn from "./TabButton";
import { useState } from "react";

export default function Examples() {
  const [selectedVal, setSelectedVal] = useState();

  function handleSelect(selectBtn) {
    setSelectedVal(selectBtn);
    console.log(selectBtn);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButn
          isSelected={selectedVal === "components"}
          onSelect={() => handleSelect("components")}
        >
          Component
        </TabButn>
        <TabButn
          isSelected={selectedVal === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButn>
        <TabButn
          isSelected={selectedVal === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButn>
        <TabButn
          isSelected={selectedVal === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButn>
      </menu>
      {!selectedVal ? <p>Please select a topic</p> : null}

      {selectedVal ? (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedVal].title}</h3>
          <p>{EXAMPLES[selectedVal].description}</p>
          <pre>
            <code>{EXAMPLES[selectedVal].code}</code>
          </pre>
        </div>
      ) : null}
    </section>
  );
}
