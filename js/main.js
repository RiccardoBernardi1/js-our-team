"use strict"
// 1. Creare un'array contenente le info dei componenti del team
// 2. Stampare in console nome, ruolo e la stringa della foto
// 3. Stampare le stesse su DOM
// 4. Trasformare la stringa della foto in un immagine effettiva
// 5. Creare una card per ciascuno dei membri del team

const team=[
    {
        memberName:"Wayne Barnett",
        memberRole:"Founder & CEO",
        memberImg:"wayne-barnett-founder-ceo.jpg"
    },
    {
        memberName:"Angela Caroll",
        memberRole:"Chief Editor",
        memberImg:"angela-caroll-chief-editor.jpg"
    },
    {
        memberName:"Walter Gordon",
        memberRole:"Office Manager",
        memberImg:"walter-gordon-office-manager.jpg"
    },
    {
        memberName:"Angela Lopez",
        memberRole:"Social Media Manager",
        memberImg:"angela-lopez-social-media-manager.jpg"
    },
    {
        memberName:"Scott Estrada",
        memberRole:"Developer",
        memberImg:"scott-estrada-developer.jpg"
    },
    {
        memberName:"Barbara Ramos",
        memberRole:"Graphic Designer",
        memberImg:"barbara-ramos-graphic-designer.jpg"
    }
];
const main=document.querySelector("main");
for (let i = 0; i < team.length; i++) {
    const card=document.createElement("div");
    card.classList.add("card");
    card.innerHTML=`
        <img src="img/${team[i].memberImg}" alt="">
        <h3>${team[i].memberName}</h3>
        <p>${team[i].memberRole}</p>`;
    main.append(card);
    console.log(team[i].memberName);
    console.log(team[i].memberRole);
    console.log(team[i].memberImg);
};