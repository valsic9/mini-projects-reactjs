import { useEffect, useState } from "react";

export function MouseFollower() {
  // Variables to store the state of the mouse follower
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Add a class to the body element to change the cursor style
  useEffect(() => {
    document.body.classList.toggle("esp-cursor", enabled);

    return () => {
      document.body.classList.remove("esp-cursor");
    };
  });

  // Add an event listener to track the mouse position
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    // Add the event listener when the component is mounted
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
      // Add a class to the mouse follower div to toggle visibility
      document.getElementById("mouse-follower").classList.add("mounted");
    }

    // Remove the event when the component is unmounted
    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.getElementById("mouse-follower").classList.remove("mounted");
    };
  }, [enabled]);
  return (
    <>
      <div
        id="mouse-follower"
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <h1>Mouse Follower project</h1>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Disable " : "Enable "}
        follow mouse
      </button>
    </>
  );
}
