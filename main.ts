
import { series } from "./data";
import { Serie } from "./Serie";

const tableBody: HTMLElement | null = document.getElementById("series-tbody");
const avgSeasonsElem: HTMLElement | null = document.getElementById("avg-seasons");
const cardImg = document.getElementById("card-img") as HTMLImageElement | null;
const cardTitle = document.getElementById("card-title") as HTMLElement | null;
const cardText = document.getElementById("card-text") as HTMLElement | null;
const cardLink = document.getElementById("card-link") as HTMLAnchorElement | null;

function renderTable(data: Serie[]): void {
    if (!tableBody) return;
    tableBody.innerHTML = "";

    data.forEach(s => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <th scope="row">${s.id}</th>
        <td class="text-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover series-name" data-id="${s.id}" style="cursor:pointer">${s.name}</td>
        <td>${s.channel}</td>
        <td>${s.seasons}</td>
    `;
    tr.addEventListener("click", () => showCard(s));
    tableBody.appendChild(tr);
    });
}

function averageSeasons(data: Serie[]): number {
    if (data.length === 0) return 0;
    const sum = data.reduce((acc, s) => acc + s.seasons, 0);
    return +(sum / data.length).toFixed(2);
}

function showCard(s: Serie): void {
    if (cardImg) cardImg.src = s.imageUrl;
    if (cardImg) cardImg.alt = s.name;
    if (cardTitle) cardTitle.textContent = s.name;
    if (cardText) cardText.textContent = s.description;
    if (cardLink) {
    cardLink.href = s.webpage;
    cardLink.textContent = "Sitio oficial";
    cardLink.target = "_blank";
    cardLink.rel = "noopener noreferrer";
    }
}

renderTable(series);
if (avgSeasonsElem) avgSeasonsElem.textContent = averageSeasons(series).toString();

// Muestra primero la primera serie por defecto (opcional):
if (series.length) showCard(series[0]);
