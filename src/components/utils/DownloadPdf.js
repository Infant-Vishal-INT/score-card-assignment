import html2pdf from "html2pdf.js";

export const downloadScoreCardPdf = (e, scoreCardId) => {
  e.preventDefault();

  const scoreCard = document.getElementById(scoreCardId);
  const opt = {
    margin: 0.12,
    filename: "myScoreCard.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 1 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf(scoreCard, opt);
};
