export default function Home() {
  return (
    <>
      <button>Click Me</button>
      <br />
      <button>Click Me</button>
      <br />
      <button>Click Me</button>
      <br />
      <button>Click Me</button>
      <br />

      <style jsx>{`
        .js-focus-visible :focus:not(.focus-visible) {
          outline: none;
        }

        button {
          cursor: pointer;
          border: none;
        }
      `}</style>
    </>
  );
}
