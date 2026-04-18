// Menu data — fun Soda Life drink lineup (no red vibes, all green/blue/pink)
const MENU = [
  // Signature sodas
  { cat: "signature", name: "Mermaid Lagoon", desc: "Sprite + blue raspberry + pineapple + coconut cream. Tastes like a beach day.", price: "$4.75", rating: 4.9, reviews: 214, open: true, accent: "linear-gradient(135deg, #00C6FF, #0072FF)" },
  { cat: "signature", name: "Pink Paradise", desc: "Fresca + strawberry + peach + vanilla cream. Bubblegum in a cup.", price: "$4.75", rating: 4.8, reviews: 187, open: true, accent: "linear-gradient(135deg, #FF7AC6, #FF4FB8)" },
  { cat: "signature", name: "Green Machine", desc: "Mountain Dew + lime + coconut cream. Fuel for the play zone.", price: "$4.75", rating: 4.7, reviews: 162, open: true, accent: "linear-gradient(135deg, #00E676, #21D4A0)" },
  { cat: "signature", name: "Sunset Surfer", desc: "Sprite + peach + mango + pineapple. Rides smooth all day.", price: "$4.75", rating: 4.8, reviews: 143, open: true, accent: "linear-gradient(135deg, #FFD36E, #FF7AC6)" },
  { cat: "signature", name: "Pixie Fizz", desc: "Sprite + cotton candy + lime. Sparkly, silly, maybe magical.", price: "$4.75", rating: 4.9, reviews: 221, open: true, accent: "linear-gradient(135deg, #B693FF, #FF7AC6)" },
  { cat: "signature", name: "Bubble Pop", desc: "Sprite + raspberry + coconut cream. The people's pour.", price: "$4.75", rating: 4.7, reviews: 198, open: true, accent: "linear-gradient(135deg, #FF7AC6, #00C6FF)" },

  // Cream pours
  { cat: "creamy", name: "Cookies & Cream Dream", desc: "Dr Pepper + vanilla cream + cookie crumble. Served with a long spoon.", price: "$5.25", rating: 4.9, reviews: 301, open: true, accent: "linear-gradient(135deg, #B693FF, #0072FF)" },
  { cat: "creamy", name: "Berry Cloud Nine", desc: "Sprite + blackberry + vanilla cream + whip. Floats like a good mood.", price: "$5.25", rating: 4.8, reviews: 176, open: true, accent: "linear-gradient(135deg, #FF7AC6, #B693FF)" },
  { cat: "creamy", name: "Caffeine Queen", desc: "Dr Pepper + coconut + vanilla cream. She's been through things.", price: "$5.25", rating: 4.9, reviews: 248, open: true, accent: "linear-gradient(135deg, #21D4A0, #0072FF)" },
  { cat: "creamy", name: "Vanilla Sky", desc: "Cream soda + vanilla cream + cotton candy. Nap-inducing in the best way.", price: "$5.25", rating: 4.7, reviews: 129, open: true, accent: "linear-gradient(135deg, #00C6FF, #B4ECFF)" },

  // Zero sugar
  { cat: "zero", name: "Clean Wave", desc: "Diet Sprite + coconut + lime. All the fizz, none of the guilt.", price: "$4.75", rating: 4.6, reviews: 92, open: true, accent: "linear-gradient(135deg, #00E676, #00C6FF)" },
  { cat: "zero", name: "Sugar-Free Sunset", desc: "Zero Dr Pepper + sugar-free peach + almond cream. Sunset, unplugged.", price: "$4.75", rating: 4.5, reviews: 78, open: true, accent: "linear-gradient(135deg, #FFD36E, #00E676)" },
  { cat: "zero", name: "Mint Condition", desc: "Diet Mtn Dew + mint + lime. Cool as your favorite playlist.", price: "$4.75", rating: 4.7, reviews: 104, open: true, accent: "linear-gradient(135deg, #21D4A0, #00E676)" },

  // Treats
  { cat: "treats", name: "Warm Chunk Cookie", desc: "Giant chocolate chunk cookie, baked on the hour. Pair with anything.", price: "$3.25", rating: 5.0, reviews: 412, open: true, accent: "linear-gradient(135deg, #8A5A00, #FFD36E)" },
  { cat: "treats", name: "Pretzel Bites", desc: "Warm soft pretzels with honey mustard or cream cheese dip.", price: "$4.25", rating: 4.6, reviews: 88, open: true, accent: "linear-gradient(135deg, #FFD36E, #00E676)" },
  { cat: "treats", name: "Ice Cream Float", desc: "Any soda + a scoop of vanilla. Classic, never boring.", price: "$5.75", rating: 4.8, reviews: 156, open: true, accent: "linear-gradient(135deg, #00C6FF, #FF7AC6)" },
];

function starString(r) {
  const full = Math.floor(r);
  const half = r - full >= 0.5;
  return "★".repeat(full) + (half ? "☆" : "") + "☆".repeat(5 - full - (half ? 1 : 0));
}

function renderMenu(filter = "all") {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;
  const items = filter === "all" ? MENU : MENU.filter(m => m.cat === filter);
  grid.innerHTML = items.map(m => `
    <article class="m-card" data-cat="${m.cat}">
      <div class="m-thumb" style="background:${m.accent}">
        <div class="liq"></div>
        <span class="dot1"></span><span class="dot2"></span>
      </div>
      <div class="m-body">
        <h3 class="m-title">${m.name}</h3>
        <div class="m-meta">
          <span class="stars" aria-label="Rated ${m.rating} out of 5">${starString(m.rating)}</span>
          <span>${m.rating.toFixed(1)} &middot; ${m.reviews} reviews</span>
          <span class="cat ${m.cat}">${catLabel(m.cat)}</span>
        </div>
        <p class="m-desc">${m.desc}</p>
        <div class="m-foot">
          <span class="m-price">${m.price}</span>
          <span class="m-open">Open now</span>
        </div>
      </div>
    </article>
  `).join("");
}

function catLabel(c) {
  return {
    signature: "Signature",
    creamy: "Cream Pour",
    zero: "Zero Sugar",
    treats: "Treat"
  }[c] || c;
}

// Tabs
document.addEventListener("click", (e) => {
  const t = e.target.closest(".tab");
  if (!t) return;
  document.querySelectorAll(".tab").forEach(el => el.classList.remove("active"));
  t.classList.add("active");
  renderMenu(t.dataset.filter);
});

// Init
renderMenu("all");

// Footer year
const yr = document.getElementById("yr");
if (yr) yr.textContent = new Date().getFullYear();

// Smooth scroll for nav anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id.length > 1 && document.querySelector(id)) {
      e.preventDefault();
      document.querySelector(id).scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
