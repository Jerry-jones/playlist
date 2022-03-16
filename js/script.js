// Complete Day 1 goals here
//let songs = ["your sister is right", "Crossfire", "Lost in Sound", "Unstoppable"];
//let artists = ["Wilbur Soot", "Stephen", "Roy Knox", "The Score"];
//let pic = ["https://cdn.glitch.global/51e250aa-49f9-45e9-b424-085a88a55e2a/deecbf18-f88e-4d91-a134-09ffd959932d.image.png?v=1645055638716", "https://cdn.glitch.global/51e250aa-49f9-45e9-b424-085a88a55e2a/5c0a2c22-0f6e-4670-8c0b-64d2cadfad10.image.png?v=1645056117593", "https://cdn.glitch.global/51e250aa-49f9-45e9-b424-085a88a55e2a/48e279e8-4e76-4115-863d-38189c3c4163.image.png?v=1645056227651", "https://cdn.glitch.global/51e250aa-49f9-45e9-b424-085a88a55e2a/3d4aa451-569f-421d-b3e9-19f1d88fc958.image.png?v=1645056830874"];
//let musics = ["https://www.youtube.com/watch?v=m7JrCUuEJPU", "https://www.youtube.com/watch?v=eH4F1Tdb040", "https://www.youtube.com/watch?v=bafd5CsNk0M", "https://www.youtube.com/watch?v=_PBlykN4KIY"];
let songs = [
  {
    title: "your sister is right",
    artists: "Wilbur Soot",
    pic: "https://cdn.glitch.global/51e250aa-49f9-45e9-b424-085a88a55e2a/deecbf18-f88e-4d91-a134-09ffd959932d.image.png?v=1645055638716",
    music: "https://www.youtube.com/watch?v=m7JrCUuEJPU",
  },
  {
    title: "Crossfire",
    artists: "Stephen",
    pic: "https://cdn.glitch.global/51e250aa-49f9-45e9-b424-085a88a55e2a/5c0a2c22-0f6e-4670-8c0b-64d2cadfad10.image.png?v=1645056117593",
    music: "https://www.youtube.com/watch?v=eH4F1Tdb040",
  },

  {
    title: "Lost in Sound",
    artists: "Roy Knox",
    pic: "https://cdn.glitch.global/51e250aa-49f9-45e9-b424-085a88a55e2a/48e279e8-4e76-4115-863d-38189c3c4163.image.png?v=1645056227651",
    music: "https://www.youtube.com/watch?v=bafd5CsNk0M",
  },
  {
    title: "Unstoppable",
    artists: "The Score",
    pic: "https://cdn.glitch.global/51e250aa-49f9-45e9-b424-085a88a55e2a/3d4aa451-569f-421d-b3e9-19f1d88fc958.image.png?v=1645056830874",
    music: "https://www.youtube.com/watch?v=_PBlykN4KIY",
  },
];

function displaySongInfo() {
  // Complete the Day 2 goals inside this function
  //Display song names
  songs.forEach(function (song) {
    $(".songs").append("<p>" + song.title + "</p>");
     $(".links").append(`<a href="${song.music}"> Click here </a>`);
    $(".artists").append("<p>" + song.artists + "</p>");
    $(".images").append(`<img src="${song.pic}"> `);
  });
  //Display artists names
  
  //Display images
}
function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
} 

function addSongInfo() {
  let song = $(".title").val();
  let artist = $(".artist").val();
  let image = $(".image").val();
  let link = $(".link").val();
  songs.push({
    title: song,
    artists: artist, 
    pic: image,
    music: link,
  });

  // Complete Day 3 goals inside this function
}

$(".add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
