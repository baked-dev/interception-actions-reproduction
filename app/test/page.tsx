export default function TestPage() {
  async function action(data: FormData) {
    "use server";
    data.forEach((val, key) => console.log(key, val));
  }

  return (
    <form action={action}>
      <button type="submit">Test</button>
    </form>
  );
}
