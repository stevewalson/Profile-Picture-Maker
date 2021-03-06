const Downloadbtn = document.querySelector(".Downloadbtn"),
  profile = document.querySelector(".profile"),
  initialsInput = document.querySelector("#initials"),
  profileinitials = document.querySelector(".initials"),
  initialsColor = document.querySelector("#Textcolor"),
  BackColorCheck = document.querySelector("#BackColorCheck"),
  BackColorInput = document.querySelector("#BackColorInput"),
  BackImageInput = document.querySelector("#BackImageInput"),
  overlay = document.querySelector(".overlay"),
  overlayColorCheck = document.querySelector("#overlayColorCheck"),
  overlayColorInput = document.querySelector("#overlayColorInput"),
  repetitionOverlay = document.querySelector(".repetitionOverlay"),
  repetitionOverlayOverlayCheck = document.querySelector(
    "#overlayRepetitionCheck"
  ),
  setback = document.querySelector(".setbackBtn");
initialsInput.addEventListener("input", () => {
  initialsInput.value < 1
    ? ((profileinitials.innerText = "AB"),
      (repetitionOverlay.innerText = ""),
      (Downloadbtn.style.bottom = "-20px"),
      (Downloadbtn.style.opacity = "0"))
    : ((profileinitials.innerText = initialsInput.value),
      (repetitionOverlay.innerText = "" + initialsInput.value.repeat(400)),
      (Downloadbtn.style.bottom = "20px"),
      (Downloadbtn.style.opacity = "1"));
}),
  initialsColor.addEventListener("input", () => {
    profileinitials.style.color = initialsColor.value;
  }),
  BackColorInput.addEventListener("input", () => {
    profile.style.backgroundColor = BackColorInput.value;
  }),
  BackImageInput.addEventListener("input", () => {
    BackImageInput.value < 1 &&
      ((profile.style.background = BackColorInput.value),
      (Downloadbtn.style.bottom = "-20px"),
      (Downloadbtn.style.opacity = "0"));
  }),
  setback.addEventListener("click", () => {
    BackImageInput.value < 1
      ? ((profile.style.background = BackColorInput.value),
        (Downloadbtn.style.bottom = "-20px"),
        (Downloadbtn.style.opacity = "0"))
      : ((profile.style.background = "url(" + BackImageInput.value + ")"),
        (profile.style.backgroundColor = "#1b54b0"),
        (profile.style.backgroundSize = "cover"),
        (profile.style.backgroundPosition = "center"),
        (profile.style.backgroundRepeat = "no-repeat"),
        (Downloadbtn.style.bottom = "20px"),
        (Downloadbtn.style.opacity = "1"));
  }),
  Downloadbtn.addEventListener("click", (e) => {
    html2canvas(profile, {
      imageTimeout: 0,
      backgroundColor: null,
      useCORS: !0,
    }).then((e) => {
      profile.append(e);
      const o = document.createElement("a");
      (o.download = initialsInput.value + ".png"),
        (o.href = e.toDataURL()),
        o.click(),
        o.delete,
        profile.removeChild(e);
    });
  }),
  overlayColorCheck.addEventListener("change", () => {
    1 == overlayColorCheck.checked
      ? ((overlayColorInput.style.visibility = "visible"),
        (overlay.style.display = "block"),
        (repetitionOverlay.style.display = "none"),
        (repetitionOverlayOverlayCheck.checked = !1))
      : ((overlayColorInput.style.visibility = "hidden"),
        (overlay.style.display = "none"));
  }),
  repetitionOverlayOverlayCheck.addEventListener("change", () => {
    1 == repetitionOverlayOverlayCheck.checked
      ? ((repetitionOverlay.style.display = "block"),
        (overlayColorInput.style.visibility = "hidden"),
        (overlay.style.display = "none"),
        (overlayColorCheck.checked = !1))
      : (repetitionOverlay.style.display = "none");
  }),
  overlayColorInput.addEventListener("input", () => {
    overlay.style.backgroundColor = overlayColorInput.value;
  }),
  BackColorCheck.addEventListener("change", () => {
    1 == BackColorCheck.checked
      ? ((profile.style.background = BackColorInput.value),
        (BackImageInput.style.display = "block"),
        (BackColorInput.style.display = "none"),
        (setback.style.display = "block"))
      : ((profile.style.background = BackColorInput.value),
        (BackColorInput.style.display = "block"),
        (BackImageInput.style.display = "none"),
        (setback.style.display = "none"));
  });
