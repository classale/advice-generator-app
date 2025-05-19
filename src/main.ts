const generate = document.querySelector<HTMLButtonElement>("#generate")!;
const adviceId = document.querySelector<HTMLHeadingElement>("#adviceId")!;
const advice = document.querySelector<HTMLParagraphElement>("#advice")!;

generate.addEventListener("click", async () => {
  const resp = await fetch("https://api.adviceslip.com/advice", {cache: "no-store"});
  const data = await resp.json();

  console.log(data.slip.id)
  adviceId.innerHTML = `ADVICE #${data.slip.id}`
  advice.innerHTML = `"${data.slip.advice}"`
})