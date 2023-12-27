let speakerSection = document.getElementById('speakerSection');

const speakers = [
    {
      image: 'images/speakers/Brendan_Eich.jpg',
      name: 'Brendan Eich',
      profession: 'American computer programmer',
      about: 'Brendan Eich is an American computer programmer and technology executive.',
    },
    {
        image: 'images/speakers/Dennis_Ritchie.jpg',
        name: 'Dennis Ritchie',
        profession: 'American computer scientist',
        about: 'Dennis MacAlistair Ritchie was an American computer scientist.',
    },
    {
        image: 'images/speakers/ken_thompson.jpg',
        name: 'Ken Thompson',
        profession: 'American computer designer',
        about: 'Kenneth Lane Thompson is an American pioneer of computer science.'
    },
    {
        image: 'images/speakers/Larry_Page.jpg',
        name: 'Larry Page',
        profession: 'American business magnate',
        about: 'Lawrence Edward Page is an American business magnate, computer scientist and internet entrepreneur.',
    },
    {
        image: 'images/speakers/Margaret_Hamilton.jpg',
        name: 'Margaret Hamilton',
        profession: 'American computer scientist',
        about: 'Margaret Heafield Hamilton is an American computer scientist.',
    },
    {
        image: 'images/speakers/Radia-Perlman.jpg',
        name: 'Radia Perlman',
        profession: 'American network engineer',
        about: 'Radia Joy Perlman is an American computer programmer and network engineer.',
    },
];

let speaker_content = '';

speakers.forEach((speaker) => {
    speaker_content += `
      <li>
        <div id="img_background">
          <img src=${speaker.image} alt=${speaker.name}>
        </div>
       <div id="speaker_details">
         <h3>${speaker.name}</h3>
         <br>
         <h4>${speaker.profession}</h4>
         <hr>
         <detail>${speaker.about}</detail>
       </div>
      </li>
    `;
});

speakerSection.innerHTML = speaker_content;