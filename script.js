async function render(fi, si) {
    let response = await fetch(`https://rickandmortyapi.com/api/character/${fi},${si}`)
    let data = await response.json()
    console.log(data)
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${fi},${si}`);
    const data = await response.json();

    console.log(data); // Should be an array with two characters

    const [char1, char2] = data;

    const img1 = document.getElementById("firstImage");
    const img2 = document.getElementById("secondImage");

    img1.src = char1.image;
    img1.alt = char1.name;

    img2.src = char2.image;
    img2.alt = char2.name;
  } catch (error) {
    console.error("Error fetching characters:", error);
    alert("Something went wrong. Try different character IDs.");
  }
}

render(20, 35);



