export default function Home() {
  return (
    <>
      <h1>Next focus-visible</h1>
      <button>Click Me</button>
      <button>Click Me</button>
      <button>Click Me</button>
      <button>Click Me</button>

      <style jsx>{`
        .js-focus-visible :focus:not(.focus-visible) {
          outline: none;
        }

        button {
          display: block;
          cursor: pointer;
          border: none;
          background: #ccc;
          margin: 10px 0;
        }

        button.focus-visible {
          color: red;
          outline: 1px solid red;
        }
      `}</style>
    </>
  );
}
