
import React, { useState } from "react";
import {
  ArrowRight, ArrowUpRight, BedDouble, Check, Clock3, CookingPot,
  DoorOpen, MapPin, Menu, MessageCircle, ShieldCheck, Sparkles,
  Users, WashingMachine, Wifi, X, Zap, Camera, Droplets,
  Utensils, LockKeyhole, Phone, Coffee, Tv
} from "lucide-react";

const WHATSAPP_NUMBER = "919102796038";

const ADDRESS =
  "Front of Karuna Apartment, Nawal Kishore Road, Salimpur Ahra, Dujra Diara, Patna, Bihar 800003";

const MAP_URL =
  "https://maps.app.goo.gl/mog6p8JGnXejrQj26?g_st=iw";

const rooms = [
  {
    id: "single",
    title: "Single Occupancy",
    people: "1 person",
    price: 8000,
    tag: "More privacy",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85",
    description: "A private, comfortable space to rest and focus."
  },
  {
    id: "double",
    title: "Double Sharing",
    people: "2 people",
    price: 5500,
    tag: "Popular choice",
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=85",
    description: "Comfortable shared living at an affordable price."
  },
  {
    id: "triple",
    title: "Triple Sharing",
    people: "3 people",
    price: 4500,
    tag: "Great value",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=85",
    description: "A practical option for students and professionals."
  },
  {
    id: "sharing",
    title: "4 / 6 Sharing",
    people: "4–6 people",
    price: 3500,
    tag: "Budget friendly",
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=85",
    description: "Budget-friendly accommodation with shared facilities."
  }
];

const facilities = [
  { icon: Wifi, title: "Free Wi-Fi", text: "Stay connected" },
  { icon: Camera, title: "CCTV", text: "Security cameras" },
  { icon: WashingMachine, title: "Washing machine", text: "Laundry facility" },
  { icon: Utensils, title: "Food options", text: "With or without food" },
  { icon: Droplets, title: "Water supply", text: "Daily essentials" },
  { icon: Zap, title: "Power backup", text: "Confirm availability" },
  { icon: Tv, title: "Common area", text: "Relax and unwind" },
  { icon: LockKeyhole, title: "Secure access", text: "Ask about access rules" }
];

const gallery = [
  { image: "/images/image1.jpeg", title: "PG Photo 1" },
  { image: "/images/image2.jpeg", title: "PG Photo 2" },
  { image: "/images/image3.jpeg", title: "PG Photo 3" },
  { image: "/images/image4.jpeg", title: "PG Photo 4" },
  { image: "/images/image5.jpeg", title: "PG Photo 5" },
  { image: "/images/image6.jpeg", title: "PG Photo 6" },
  { image: "/images/image7.jpeg", title: "PG Photo 7" },
  { image: "/images/image8.jpeg", title: "PG Photo 8" },
  { image: "/images/image9.jpeg", title: "PG Photo 9" },
];

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [foodFilter, setFoodFilter] = useState("all");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    room: "Double Sharing",
    food: "With food",
    date: "",
    message: ""
  });

  const [notice, setNotice] = useState("");

  const filteredRooms = rooms.filter((room) => {
    if (foodFilter === "all") return true;
    if (foodFilter === "food") return true;
    return true;
  });

  function updateForm(key, value) {
    setForm((previous) => ({ ...previous, [key]: value }));
  }

  function sendRoomInquiry(room) {
    const message =
      `Hello PRASAD PG & Hostel!\n\n` +
      `I am interested in: ${room.title}\n` +
      `Sample displayed rent: ₹${room.price.toLocaleString("en-IN")} per person/month\n` +
      `Food preference: Please share both with-food and without-food prices.\n\n` +
      `Please confirm actual rent, availability, deposit and room photos.\n` +
      `I understand the displayed price is only a demo price.`;

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  function submitInquiry(event) {
    event.preventDefault();

    const message =
      `Hello PRASAD PG & Hostel! I want to enquire about a room.\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Room: ${form.room}\n` +
      `Food: ${form.food}\n` +
      `Move-in date: ${form.date || "Flexible"}\n` +
      `Requirements: ${form.message || "None"}\n\n` +
      `Please confirm actual rent, availability, deposit and facilities.`;

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setNotice("Your enquiry is ready in WhatsApp.");
  }

  const navItems = [
    ["Rooms", "#rooms"],
    ["Facilities", "#facilities"],
    ["Gallery", "#gallery"],
    ["Location", "#location"]
  ];

  return (
    <div className="site">
      {/* <div className="demo-strip">
        <Sparkles size={14} />
        DEMO WEBSITE · SAMPLE RENT AND PHOTOS
      </div> */}

      <header className="header">
        <div className="container nav">
          <a className="brand" href="#home" aria-label="PRASAD home">
            <span className="brand-icon"><DoorOpen size={24} /></span>
            <span>
              <strong>PRASAD </strong>
              <small>PG & HOSTEL · PATNA</small>
            </span>
          </a>

          <nav className="desktop-nav">
            {navItems.map(([label, href]) => (
              <a key={label} href={href}>{label}</a>
            ))}
          </nav>

          <a className="nav-cta" href="#book">
            <MessageCircle size={17} />
            <span>Enquire now</span>
            <ArrowUpRight size={16} />
          </a>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a href="#book" onClick={() => setMenuOpen(false)}>
              WhatsApp enquiry
            </a>
          </nav>
        )}
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-photo" />
          <div className="hero-overlay" />

          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow light">
                <span /> YOUR STAY IN PATNA
              </div>

              <h1>
                Feel at home.
                <br />
                <em>Live comfortably.</em>
              </h1>

              <p>
                Comfortable room options for students and working
                professionals, with flexible food preferences and
                everyday essentials.
              </p>

              <div className="hero-actions">
                <a className="btn btn-lime" href="#rooms">
                  Explore rooms <ArrowRight size={17} />
                </a>
                <a className="hero-text-link" href="#location">
                  Find our location <MapPin size={16} />
                </a>
              </div>

              <div className="hero-features">
                <span><ShieldCheck size={17} /> Security features</span>
                <span><Wifi size={17} /> Wi-Fi</span>
                <span><CookingPot size={17} /> Food options</span>
              </div>
            </div>

            <div className="booking-card" id="book">
              <div className="card-kicker">
                <span className="status-dot" /> QUICK ROOM ENQUIRY
              </div>

              <h2>Find your next stay.</h2>
              <p>Share your requirements to enquire on WhatsApp.</p>

              <form onSubmit={submitInquiry} className="booking-form">
                <label>
                  Your name
                  <input
                    required
                    value={form.name}
                    onChange={(e) => updateForm("name", e.target.value)}
                    placeholder="Enter your name"
                  />
                </label>

                <label>
                  Phone number
                  <input
                    required
                    type="tel"
                    inputMode="tel"
                    value={form.phone}
                    onChange={(e) => updateForm("phone", e.target.value)}
                    placeholder="Your contact number"
                  />
                </label>

                <label>
                  Room preference
                  <select
                    value={form.room}
                    onChange={(e) => updateForm("room", e.target.value)}
                  >
                    <option>Single Occupancy</option>
                    <option>Double Sharing</option>
                    <option>Triple Sharing</option>
                    <option>4 / 6 Sharing</option>
                  </select>
                </label>

                <label>
                  Food preference
                  <select
                    value={form.food}
                    onChange={(e) => updateForm("food", e.target.value)}
                  >
                    <option>With food</option>
                    <option>Without food</option>
                  </select>
                </label>

                <label>
                  Expected move-in date
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => updateForm("date", e.target.value)}
                  />
                </label>

                <label>
                  Additional requirements <span className="optional">(optional)</span>
                  <textarea
                    rows="2"
                    value={form.message}
                    onChange={(e) => updateForm("message", e.target.value)}
                    placeholder="Budget, preferred facilities..."
                  />
                </label>

                <button className="btn btn-green full" type="submit">
                  <MessageCircle size={18} />
                  Send on WhatsApp
                  <ArrowUpRight size={17} />
                </button>

                {notice && <p className="form-notice"><Check size={15} /> {notice}</p>}
                <small className="form-note">Enquiry only · No online payment</small>
              </form>
            </div>
          </div>

          <div className="container hero-bottom">
            <span>COMFORT · CONVENIENCE · COMMUNITY</span>
            <span className="hero-rule" />
            <span>PATNA, BIHAR</span>
          </div>
        </section>

        <section className="intro section-pad">
          <div className="container intro-grid">
            <div>
              <div className="eyebrow"><span /> A PLACE TO BELONG</div>
              <h2>More than a room.<br /><em>A place to feel at home.</em></h2>
            </div>
            <p>
              Choose a room type that suits your budget, ask about food
              arrangements, and contact the property directly for current
              availability and actual facilities.
            </p>
          </div>
        </section>

        <section className="rooms-section section-pad" id="rooms">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow"><span /> ROOM OPTIONS</div>
                <h2>Find your <em>perfect fit.</em></h2>
                <p>Choose a sharing option that works for you.</p>
              </div>

              <div className="filter-tabs" aria-label="Food filter">
                {[
                  ["all", "All rooms"],
                  ["food", "With food"],
                  ["nofood", "Without food"]
                ].map(([value, label]) => (
                  <button
                    key={value}
                    className={foodFilter === value ? "active" : ""}
                    onClick={() => setFoodFilter(value)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="room-grid">
              {filteredRooms.map((room) => (
                <article className="room-card" key={room.id}>
                  <div className="room-image-wrap">
                    <img src={room.image} alt={`${room.title} sample photo`} loading="lazy" />
                    <span className="room-tag">{room.tag}</span>
                  </div>

                  <div className="room-body">
                    <div className="room-meta">
                      <span><Users size={14} /> {room.people}</span>
                      <span><BedDouble size={14} /> Shared living</span>
                    </div>

                    <h3>{room.title}</h3>
                    <p>{room.description}</p>

                    <div className="price-row">
                      <div>
                        <strong>₹{room.price.toLocaleString("en-IN")}</strong>
                        <small>/ person / month*</small>
                      </div>
                      <span className="sample-tag">Sample price</span>
                    </div>

                    <button
                      className="room-button"
                      onClick={() => sendRoomInquiry(room)}
                    >
                      Ask about this room <ArrowUpRight size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* <p className="sample-note">
              * All displayed rents are examples for this demo, not confirmed
              property rates. Ask the owner about actual rent, food charges,
              deposit and availability.
            </p> */}
          </div>
        </section>

        <section className="facilities-section section-pad" id="facilities">
          <div className="container">
            <div className="section-heading facilities-heading">
              <div>
                <div className="eyebrow light"><span /> EVERYDAY ESSENTIALS</div>
                <h2>Little things.<br /><em>Better living.</em></h2>
              </div>
              <p>
                Review the available facilities with the owner before booking.
                All facilities below are illustrative until confirmed.
              </p>
            </div>

            <div className="facility-grid">
              {facilities.map(({ icon: Icon, title, text }, index) => (
                <article className="facility-card" key={title}>
                  <div className="facility-icon"><Icon size={22} /></div>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <span className="facility-number">0{index + 1}</span>
                </article>
              ))}
            </div>

            <div className="facility-foot">
              <span><Check size={15} /> Ask about inclusions</span>
              <span><Check size={15} /> Confirm with the owner</span>
            </div>
          </div>
        </section>

        <section className="gallery-section section-pad" id="gallery">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow"><span /> PHOTO GALLERY</div>
                <h2>Take a closer <em>look.</em></h2>
                <p>These are sample photos, not verified photos of this PG.</p>
              </div>
              <a className="text-link" href="#book">
                Ask for actual photos <ArrowUpRight size={16} />
              </a>
            </div>

           <div className="gallery-grid">
  {gallery.map((item, index) => (
    <figure
      className={`gallery-item gallery-${index + 1}`}
      key={item.image}
    >
      <img
        src={item.image}
        alt={`PRASAD PG & Hostel photo ${index + 1}`}
        loading={index < 3 ? "eager" : "lazy"}
        onError={(e) => {
          e.currentTarget.style.opacity = "0.3";
        }}
      />
      <figcaption>{item.title}</figcaption>
    </figure>
  ))}
</div>
          </div>
        </section>

        <section className="location-section section-pad" id="location">
          <div className="container location-card">
            <div className="location-copy">
              <div className="eyebrow"><span /> FIND US IN PATNA</div>
              <h2>Your next chapter<br /><em>starts here.</em></h2>
              <p className="address">{ADDRESS}</p>
              <div className="location-note">
                <MapPin size={17} />
                <span>In front of Karuna Apartment</span>
              </div>
              <a
                className="btn btn-green map-button"
                href={MAP_URL}
                target="_blank"
                rel="noreferrer"
              >
                <MapPin size={17} /> Open Google Maps <ArrowUpRight size={16} />
              </a>
            </div>

            <a
              className="map-panel"
              href={MAP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Open PRASAD location in Google Maps"
            >
              <div className="map-grid" />
              <div className="map-marker"><MapPin size={25} /></div>
              <div className="map-caption">
                <strong>PRASAD PG & Hostel</strong>
                <span>Karuna Apartment · Patna, Bihar</span>
                <small>Tap to open Google Maps ↗</small>
              </div>
            </a>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-inner">
            <div>
              <div className="eyebrow light"><span /> YOUR STAY, YOUR WAY</div>
              <h2>Ready to find<br /><em>your room?</em></h2>
              <p>Ask about room availability, monthly rent and food options.</p>
            </div>
            <a
              className="btn btn-lime"
              href={whatsappLink("Hello PRASAD PG & Hostel! Please share current room availability, actual rent, food options and real room photos.")}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} /> Chat on WhatsApp <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-icon"><DoorOpen size={23} /></span>
            <span><strong>PRASAD</strong><small>PG & HOSTEL · PATNA</small></span>
          </a>
          {/* <p>A comfortable place to stay.<br /><span>Demo concept · Sample photos and prices</span></p> */}
          <a className="footer-contact" href="#book"><Phone size={16} /> Room enquiry</a>
        </div>

        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} PRASAD PG & Hostel</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappLink("Hello PRASAD PG & Hostel! Please share room availability and rent details.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with PRASAD on WhatsApp"
      >
        <MessageCircle size={23} />
        <span>WhatsApp</span>
      </a>

      <div className="mobile-bottom-cta">
        <a href="#rooms">View rooms</a>
        <a href={whatsappLink("Hello PRASAD PG & Hostel! Please share current availability and rent details.")}
          target="_blank" rel="noreferrer">
          <MessageCircle size={17} /> WhatsApp
        </a>
      </div>
    </div>
  );
}

export default App;
