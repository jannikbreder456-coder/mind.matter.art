const EMAIL = "jannikbreder456@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/mind.matter.art";
const SUPPORTED_LANGUAGES = ["en", "de"];
const GERMAN_REGIONS = new Set(["DE", "AT", "CH", "LI", "LU"]);
const GERMAN_TIME_ZONES = new Set([
    "Europe/Berlin",
    "Europe/Vienna",
    "Europe/Zurich",
    "Europe/Luxembourg",
    "Europe/Vaduz"
]);
const HERO_IMAGE_INTERVAL = 10000;

const HERO_IMAGES = [
    {
        src: "img/optimized/meditate.webp",
        alt: "Psychedelic organic line drawing of a meditative figure"
    },
    {
        src: "img/optimized/organic-passage-original.webp",
        alt: "Organic Passage watercolor and ink artwork"
    },
    {
        src: "img/optimized/missed-opportunities-print.webp",
        alt: "Missed Opportunities figurative print artwork"
    },
    {
        src: "img/optimized/faces-v3.webp",
        alt: "Modified Abstract Faces print artwork"
    },
    {
        src: "img/optimized/event-bar-night.webp",
        alt: "Hilltop Bar event surface design at night"
    },
    {
        src: "img/optimized/festival-object.webp",
        alt: "Recycled festival mushroom built from surrounding materials"
    },
    {
        src: "img/optimized/selflove2.webp",
        alt: "Self Love II psychedelic organic drawing"
    }
];

const translations = {
    en: {
        "meta.title": "Organic Dreamscapes | Mind Matter Art",
        "meta.description": "Organic Dreamscapes by Jannik Breder: original art, fine-art prints, commissioned visuals, tattoo motifs, and spatial work.",
        "skip.shop": "Skip to shop",
        "nav.shop": "Shop",
        "nav.commissions": "Commissions",
        "nav.reviews": "Reviews",
        "nav.gallery": "Gallery",
        "nav.artist": "Artist",
        "nav.contact": "Contact",
        "hero.statement": "Visual explorations of consciousness, perception and organic complexity.",
        "hero.copy": "Original works, fine-art prints, and commissioned visuals by Jannik Breder. Drawn by hand and developed for paper, spaces, events, and identities.",
        "hero.shop": "Shop artworks",
        "hero.commission": "Commission work",
        "hero.originals": "Original artworks",
        "hero.prints": "Art prints",
        "hero.commissions": "Commission work",
        "hero.inquiry": "Direct inquiry",
        "shop.eyebrow": "Current Selection",
        "shop.title": "Collect a work or start a project",
        "shop.copy": "Explore originals, prints, and selected commission formats. Add available works to your inquiry or contact me directly for custom projects.",
        "filters.all": "All",
        "filters.originals": "Originals",
        "filters.prints": "Prints",
        "filters.commissions": "Commissions",
        "sort.label": "Sort by",
        "sort.featured": "Featured",
        "sort.low": "Price low to high",
        "sort.high": "Price high to low",
        "sort.new": "Newest first",
        "process.eyebrow": "How It Works",
        "process.title": "Simple inquiry process",
        "process.one": "Open a piece and check the details.",
        "process.two": "Add originals, prints, or services to the cart.",
        "process.three": "Send the inquiry and we clarify the rest by email.",
        "process.contact": "Contact directly",
        "reviews.eyebrow": "Buyer Feedback",
        "reviews.title": "Share your buying experience",
        "reviews.copy": "Tell me how the inquiry, communication, payment, packaging, or delivery felt. Reviews are sent by email and published only after approval.",
        "reviews.boardEyebrow": "Published reviews",
        "reviews.emptyTitle": "No public reviews yet",
        "reviews.emptyCopy": "The first approved collector reviews will appear here.",
        "reviews.name": "Name",
        "reviews.rating": "Rating",
        "reviews.purchase": "Artwork or service",
        "reviews.message": "Your experience",
        "reviews.submit": "Prepare review email",
        "reviews.note": "Your text opens as an email draft, so nothing is published automatically.",
        "gallery.eyebrow": "Gallery View",
        "gallery.title": "Selected works",
        "gallery.copy": "Selected original works, print variants, tattoo drawings, objects, and spatial projects.",
        "gallery.organic": "Organic Passage - print available by request",
        "gallery.abstract": "Abstract Faces - watercolor and ink on paper",
        "gallery.facesV3": "Faces V3 - modified print variant",
        "gallery.selfLoveTwo": "Self Love II - print detail",
        "gallery.selfLove": "Self Love - print study",
        "gallery.missedPrint": "Missed Opportunities - print artwork",
        "gallery.missedOriginal": "Missed Opportunities - original shown in an example frame; frame not included",
        "gallery.tattoo": "Tattoo Motif - custom template example",
        "gallery.tattooFlower": "Floral Tattoo Motif - sunflower linework",
        "gallery.mushroom": "Recycled Festival Object - mushroom project shown as an example",
        "gallery.eventBar": "Hilltop Bar - event surface design in use",
        "artist.eyebrow": "Artist Statement",
        "artist.copyOne": "I build cyber-organic visuals for people, events, spaces, and projects that need a distinct visual world. My work moves between drawing, print, installation, surface design, and identity marks.",
        "artist.copyTwo": "Organic Dreamscapes is the common thread: forms that feel grown, transformed, and slightly unfamiliar. Each project is developed for its actual context, from paper and skin to rooms, bars, stages, and visual identities.",
        "artist.imageCaption": "On-site work at Hilltop Bar, Waldfrieden",
        "artist.identity": "Visual Identity",
        "commissions.eyebrow": "Commissions",
        "commissions.title": "A visual world made for your project",
        "commissions.copy": "Commission work starts with a focused briefing. We define the idea, format, context, timing, revisions, and usage before production begins.",
        "services.customTitle": "Custom Artwork",
        "services.custom": "A personal artwork as an original drawing or digitally finished piece.",
        "services.eventTitle": "Event Visual",
        "services.event": "Poster, flyer, bar lettering, or social media visual for events and culture projects.",
        "services.tattooTitle": "Tattoo Motif",
        "services.tattoo": "A custom tattoo template developed together from your idea, body placement, and visual direction.",
        "services.logoTitle": "Logo Design Package",
        "services.logo": "A monogram, symbol, or wordmark with a clear visual direction for a project, label, collective, or small business.",
        "practice.eyebrow": "Practice and experience",
        "practice.title": "Built across paper, screens, and real spaces",
        "practice.copy": "A hybrid practice combining analog drawing, digital production, and hands-on work for events and physical environments.",
        "practice.projectLabel": "Selected project",
        "practice.projectDate": "Surface design and lettering, 2024",
        "practice.analogLabel": "Analog + digital",
        "practice.analogTitle": "From original line to finished artwork",
        "practice.analogCopy": "Drawing, watercolor, ink, image editing, vector work, layout, and production-ready files.",
        "practice.spaceLabel": "Event + space",
        "practice.spaceTitle": "Visuals that work beyond the screen",
        "practice.spaceCopy": "Surface painting, lettering, recycled objects, signage, and visual direction for cultural spaces.",
        "practice.processLabel": "Clear process",
        "practice.processTitle": "Briefing, concept, production",
        "practice.processCopy": "Scope, format, timing, revisions, and usage are agreed before work starts.",
        "contact.eyebrow": "Contact",
        "contact.title": "Bring your idea into the next visual world",
        "contact.copy": "Tell me what you are planning, where the work will live, and when you need it. For available artworks, you can also send a prepared inquiry from the cart.",
        "contact.scope": "Originals, prints, and commissioned work",
        "contact.location": "Based in Bielefeld, available for remote and on-site projects",
        "contact.email": "Email",
        "form.name": "Name",
        "form.email": "Email",
        "form.message": "Message",
        "form.submit": "Prepare email",
        "cart.eyebrow": "Cart",
        "cart.title": "Your selection",
        "cart.empty": "Your cart is empty.",
        "cart.subtotal": "Subtotal",
        "cart.send": "Send inquiry",
        "cart.clear": "Clear cart",
        "cart.open": "Open cart",
        "cart.close": "Close cart",
        "dialog.close": "Close details",
        "dialog.medium": "Medium",
        "dialog.format": "Format",
        "dialog.status": "Status",
        "dialog.price": "Price",
        "buttons.details": "Details",
        "buttons.add": "Add",
        "buttons.addToCart": "Add to cart",
        "buttons.request": "Request",
        "buttons.email": "Email",
        "buttons.instagram": "Instagram",
        "price.onRequest": "On request",
        "quantity.for": "Quantity for",
        "quantity.decrease": "Decrease quantity",
        "quantity.increase": "Increase quantity",
        "quantity.remove": "Remove",
        "mail.checkoutSubject": "Artwork inquiry - Organic Dreamscapes",
        "mail.checkoutIntro": "I am interested in the following selection:",
        "mail.subtotal": "Subtotal",
        "mail.questions": "My questions / preferred format:",
        "mail.name": "Name:",
        "mail.location": "Delivery location:",
        "mail.greeting": "Hi Jannik,",
        "mail.signoff": "Best regards",
        "mail.contactSubject": "Inquiry from",
        "mail.reviewSubject": "Review - Mind Matter Art / Organic Dreamscapes",
        "mail.reviewIntro": "I want to share my buying experience:",
        "mail.reviewPurchase": "Artwork or service",
        "mail.reviewRating": "Rating",
        "mail.reviewText": "Review",
        "mail.productInquirySubject": "Project inquiry - Organic Dreamscapes",
        "mail.productInquiryIntro": "I am interested in this offer:",
        "footer.legal": "Legal notice",
        "footer.privacy": "Privacy",
        "footer.license": "License",
        "footer.copyright": "© 2026 Jannik Breder. All rights reserved.",
        "footer.rights": "Artwork, text, images, and website code may not be used, copied, or modified without written permission.",
        "footer.country": "Germany"
    },
    de: {
        "meta.title": "Organic Dreamscapes | Mind Matter Art",
        "meta.description": "Organic Dreamscapes von Jannik Breder: Originalkunst, hochwertige Kunstdrucke, individuelle Bildwelten, Tattoo-Motive und Raumgestaltung.",
        "skip.shop": "Direkt zum Shop",
        "nav.shop": "Shop",
        "nav.commissions": "Aufträge",
        "nav.reviews": "Rezensionen",
        "nav.gallery": "Galerie",
        "nav.artist": "Künstler",
        "nav.contact": "Kontakt",
        "hero.statement": "Visuelle Erkundungen von Bewusstsein, Wahrnehmung und organischer Komplexität.",
        "hero.copy": "Originalarbeiten, Kunstdrucke und individuelle Bildwelten von Jannik Breder. Von Hand gezeichnet und für Papier, Räume, Events und Identitäten weiterentwickelt.",
        "hero.shop": "Arbeiten ansehen",
        "hero.commission": "Auftrag anfragen",
        "hero.originals": "Originalarbeiten",
        "hero.prints": "Kunstdrucke",
        "hero.commissions": "Auftragsarbeiten",
        "hero.inquiry": "Direkte Anfrage",
        "shop.eyebrow": "Aktuelle Auswahl",
        "shop.title": "Arbeit sammeln oder Projekt starten",
        "shop.copy": "Entdecke Originale, Kunstdrucke und ausgewählte Auftragsformate. Lege verfügbare Arbeiten in deine Anfrage oder kontaktiere mich direkt für individuelle Projekte.",
        "filters.all": "Alle",
        "filters.originals": "Originale",
        "filters.prints": "Kunstdrucke",
        "filters.commissions": "Aufträge",
        "sort.label": "Sortieren",
        "sort.featured": "Empfohlen",
        "sort.low": "Preis aufsteigend",
        "sort.high": "Preis absteigend",
        "sort.new": "Neueste zuerst",
        "process.eyebrow": "Ablauf",
        "process.title": "Einfacher Anfrageprozess",
        "process.one": "Öffne eine Arbeit und prüfe die Details.",
        "process.two": "Lege Originale, Kunstdrucke oder Leistungen in den Warenkorb.",
        "process.three": "Sende die Anfrage, alles Weitere klären wir per E-Mail.",
        "process.contact": "Direkt kontaktieren",
        "reviews.eyebrow": "Käuferfeedback",
        "reviews.title": "Teile deine Kauferfahrung",
        "reviews.copy": "Schreib, wie Anfrage, Kommunikation, Zahlung, Verpackung oder Lieferung für dich waren. Rezensionen werden per E-Mail gesendet und nur nach Freigabe veröffentlicht.",
        "reviews.boardEyebrow": "Veröffentlichte Rezensionen",
        "reviews.emptyTitle": "Noch keine öffentlichen Rezensionen",
        "reviews.emptyCopy": "Die ersten freigegebenen Käuferrezensionen erscheinen hier.",
        "reviews.name": "Name",
        "reviews.rating": "Bewertung",
        "reviews.purchase": "Arbeit oder Leistung",
        "reviews.message": "Deine Erfahrung",
        "reviews.submit": "Rezension per E-Mail vorbereiten",
        "reviews.note": "Dein Text öffnet sich als E-Mail-Entwurf, es wird nichts automatisch veröffentlicht.",
        "gallery.eyebrow": "Galerieansicht",
        "gallery.title": "Ausgewählte Arbeiten",
        "gallery.copy": "Ausgewählte Originalarbeiten, Druckvarianten, Tattoo-Zeichnungen, Objekte und Raumprojekte.",
        "gallery.organic": "Organic Passage - A4-Kunstdruck auf Anfrage",
        "gallery.abstract": "Abstract Faces - Aquarell und Tusche auf Papier",
        "gallery.facesV3": "Faces V3 - modifizierte Druckvariante",
        "gallery.selfLoveTwo": "Self Love II - Detail des Kunstdrucks",
        "gallery.selfLove": "Self Love - Kunstdruck",
        "gallery.missedPrint": "Missed Opportunities - Kunstdruck",
        "gallery.missedOriginal": "Missed Opportunities - Original, Rahmen nicht enthalten",
        "gallery.tattoo": "Tattoo-Motiv - Beispiel für individuelle Vorlage",
        "gallery.tattooFlower": "Florales Tattoo-Motiv - Sonnenblumen-Linienzeichnung",
        "gallery.mushroom": "Recyceltes Festival-Objekt - Pilzprojekt als Beispiel",
        "gallery.eventBar": "Hilltop Bar - Flächengestaltung im Einsatz",
        "artist.eyebrow": "Künstlerprofil",
        "artist.copyOne": "Ich gestalte cyber-organische Bildwelten für Menschen, Events, Räume und Projekte, die eine eigene visuelle Sprache brauchen. Meine Arbeit bewegt sich zwischen Zeichnung, Kunstdruck, Installation, Flächengestaltung und Zeichenentwicklung.",
        "artist.copyTwo": "Organic Dreamscapes ist der gemeinsame Faden: Formen, die gewachsen, verändert und leicht fremd wirken. Jedes Projekt entsteht für seinen konkreten Kontext, von Papier und Haut bis zu Räumen, Bars, Bühnen und visuellen Identitäten.",
        "artist.imageCaption": "Vor-Ort-Arbeit an der Hilltop Bar, Waldfrieden",
        "artist.identity": "Visuelle Identität",
        "commissions.eyebrow": "Auftragsarbeiten",
        "commissions.title": "Eine eigene Bildwelt für dein Projekt",
        "commissions.copy": "Auftragsarbeiten starten mit einem fokussierten Briefing. Idee, Format, Kontext, Zeitplan, Korrekturen und Nutzung werden vor Produktionsbeginn geklärt.",
        "services.customTitle": "Individuelles Kunstwerk",
        "services.custom": "Ein persönliches Kunstwerk als Originalzeichnung oder digital finalisierte Arbeit.",
        "services.eventTitle": "Eventgestaltung",
        "services.event": "Poster, Flyer, Bar-Schriftzug oder Social-Media-Motiv für Events und Kulturprojekte.",
        "services.tattooTitle": "Tattoo-Motiv",
        "services.tattoo": "Eine individuelle Tattoo-Vorlage, gemeinsam entwickelt aus Idee, Körperstelle und visueller Richtung.",
        "services.logoTitle": "Logo-Design-Paket",
        "services.logo": "Monogramm, Symbol oder Wortmarke mit klarer visueller Richtung für ein Projekt, Label, Kollektiv oder kleines Unternehmen.",
        "practice.eyebrow": "Praxis und Erfahrung",
        "practice.title": "Für Papier, Bildschirm und reale Räume",
        "practice.copy": "Eine hybride Praxis aus analoger Zeichnung, digitaler Produktion und handwerklicher Arbeit für Events und physische Umgebungen.",
        "practice.projectLabel": "Ausgewähltes Projekt",
        "practice.projectDate": "Flächengestaltung und Schrift, 2024",
        "practice.analogLabel": "Analog + digital",
        "practice.analogTitle": "Von der Originalzeichnung zur fertigen Anwendung",
        "practice.analogCopy": "Zeichnung, Aquarell, Tusche, Bildbearbeitung, Vektorgrafik, Layout und produktionsfertige Dateien.",
        "practice.spaceLabel": "Event + Raum",
        "practice.spaceTitle": "Gestaltung, die außerhalb des Bildschirms funktioniert",
        "practice.spaceCopy": "Flächenmalerei, Schrift, recycelte Objekte, Beschilderung und visuelle Richtung für kulturelle Orte.",
        "practice.processLabel": "Klarer Ablauf",
        "practice.processTitle": "Briefing, Konzept, Umsetzung",
        "practice.processCopy": "Umfang, Format, Timing, Korrekturen und Nutzung werden vor Arbeitsbeginn vereinbart.",
        "contact.eyebrow": "Kontakt",
        "contact.title": "Bring deine Idee in die nächste Bildwelt",
        "contact.copy": "Erzähl mir, was du planst, wo die Arbeit eingesetzt wird und wann du sie brauchst. Für verfügbare Kunst kannst du auch eine vorbereitete Anfrage aus dem Warenkorb senden.",
        "contact.scope": "Originale, Kunstdrucke und Auftragsarbeiten",
        "contact.location": "In Bielefeld, verfügbar für Remote- und Vor-Ort-Projekte",
        "contact.email": "E-Mail",
        "form.name": "Name",
        "form.email": "E-Mail",
        "form.message": "Nachricht",
        "form.submit": "E-Mail vorbereiten",
        "cart.eyebrow": "Warenkorb",
        "cart.title": "Deine Auswahl",
        "cart.empty": "Dein Warenkorb ist leer.",
        "cart.subtotal": "Zwischensumme",
        "cart.send": "Anfrage senden",
        "cart.clear": "Warenkorb leeren",
        "cart.open": "Warenkorb öffnen",
        "cart.close": "Warenkorb schließen",
        "dialog.close": "Details schließen",
        "dialog.medium": "Medium",
        "dialog.format": "Format",
        "dialog.status": "Status",
        "dialog.price": "Preis",
        "buttons.details": "Details",
        "buttons.add": "Hinzufügen",
        "buttons.addToCart": "In den Warenkorb",
        "buttons.request": "Anfragen",
        "buttons.email": "E-Mail",
        "buttons.instagram": "Instagram",
        "price.onRequest": "Auf Anfrage",
        "quantity.for": "Menge für",
        "quantity.decrease": "Menge reduzieren",
        "quantity.increase": "Menge erhöhen",
        "quantity.remove": "Entfernen",
        "mail.checkoutSubject": "Kunst-Anfrage - Organic Dreamscapes",
        "mail.checkoutIntro": "Ich interessiere mich für folgende Auswahl:",
        "mail.subtotal": "Zwischensumme",
        "mail.questions": "Meine Fragen / Wunschformat:",
        "mail.name": "Name:",
        "mail.location": "Lieferort:",
        "mail.greeting": "Hi Jannik,",
        "mail.signoff": "Viele Grüße",
        "mail.contactSubject": "Anfrage von",
        "mail.reviewSubject": "Rezension - Mind Matter Art / Organic Dreamscapes",
        "mail.reviewIntro": "Ich möchte meine Kauferfahrung teilen:",
        "mail.reviewPurchase": "Arbeit oder Leistung",
        "mail.reviewRating": "Bewertung",
        "mail.reviewText": "Rezension",
        "mail.productInquirySubject": "Projektanfrage - Organic Dreamscapes",
        "mail.productInquiryIntro": "Ich interessiere mich für dieses Angebot:",
        "footer.legal": "Impressum",
        "footer.privacy": "Datenschutz",
        "footer.license": "Lizenz",
        "footer.copyright": "© 2026 Jannik Breder. Alle Rechte vorbehalten.",
        "footer.rights": "Kunstwerke, Texte, Bilder und Website-Code dürfen ohne schriftliche Genehmigung nicht verwendet, vervielfältigt oder verändert werden.",
        "footer.country": "Deutschland"
    }
};

// Add new shop items here.
// For each entry, update the optimized full image, thumbnail, English and German copy, and featured order.
// Add new source files to optimize_images.py and run it before using them here.
// Use `contactOnly: true` plus `price: null` for inquiries that should route straight to email/Instagram.
const products = [
    {
        id: "organic-passage-print",
        category: "print",
        image: "img/optimized/organic-passage-print.webp",
        thumbnail: "img/optimized/organic-passage-print-thumb.webp",
        price: null,
        year: 2026,
        featured: 4,
        contactOnly: true,
        en: {
            title: "Organic Passage",
            label: "A4 Print",
            medium: "Fine-art print from watercolor / ink original",
            size: "A4",
            availability: "Original not available - print inquiry only",
            short: "Organic Passage is available only as an A4 print by request. The original is no longer offered.",
            vibe: "A4 print"
        },
        de: {
            title: "Organic Passage",
            label: "A4-Kunstdruck",
            medium: "Fine-Art-Print nach Aquarell / Tusche Original",
            size: "A4",
            availability: "Original nicht verfügbar - Kunstdruck auf Anfrage",
            short: "Organic Passage ist nur noch als A4-Kunstdruck auf Anfrage verfügbar. Das Original wird nicht mehr angeboten.",
            vibe: "A4-Kunstdruck"
        }
    },
    {
        id: "missed-opportunities-print",
        category: "print",
        image: "img/optimized/missed-opportunities-print.webp",
        thumbnail: "img/optimized/missed-opportunities-print-thumb.webp",
        price: null,
        year: 2026,
        featured: 3,
        contactOnly: true,
        en: {
            title: "Missed Opportunities",
            label: "Print",
            medium: "Fine-art print from original painting",
            size: "Various sizes by request",
            availability: "Print available in multiple sizes",
            short: "A monochrome figurative painting with layered greys, restrained contrast, and overlapping forms, available as a print in various sizes.",
            vibe: "Print artwork"
        },
        de: {
            title: "Missed Opportunities",
            label: "Kunstdruck",
            medium: "Fine-Art-Print nach Originalgemälde",
            size: "Verschiedene Größen nach Absprache",
            availability: "Kunstdruck in mehreren Größen verfügbar",
            short: "Ein monochromes figuratives Gemälde mit geschichteten Grautönen, reduziertem Kontrast und überlagernden Formen, als Kunstdruck in verschiedenen Größen verfügbar.",
            vibe: "Kunstdruck"
        }
    },
    {
        id: "missed-opportunities-original",
        category: "original",
        image: "img/optimized/missed-opportunities-original.webp",
        thumbnail: "img/optimized/missed-opportunities-original-thumb.webp",
        price: null,
        year: 2026,
        featured: 1,
        contactOnly: true,
        en: {
            title: "Missed Opportunities",
            label: "Original",
            medium: "Original painting",
            size: "Original artwork",
            availability: "Original available - frame not included",
            short: "The original artwork is sold without a frame. The frame shown in the image is for presentation only.",
            vibe: "Original / unframed"
        },
        de: {
            title: "Missed Opportunities",
            label: "Original",
            medium: "Originalgemälde",
            size: "Originalarbeit",
            availability: "Original verfügbar - Rahmen nicht enthalten",
            short: "Die Originalarbeit wird ohne Rahmen verkauft. Der abgebildete Rahmen dient ausschließlich als Ansichtsbeispiel.",
            vibe: "Original / ohne Rahmen"
        }
    },
    {
        id: "abstract-faces",
        category: "original",
        image: "img/optimized/abstract-faces.webp",
        thumbnail: "img/optimized/abstract-faces-thumb.webp",
        price: 333,
        year: 2026,
        featured: 2,
        en: {
            title: "Abstract Faces",
            label: "Original",
            medium: "Watercolor / ink on paper",
            size: "A4",
            availability: "One A4 original available",
            short: "An A4 original in watercolor and ink on paper with organic forms, layered marks, and sharp line details.",
            vibe: "Watercolor / ink"
        },
        de: {
            title: "Abstract Faces",
            label: "A4-Original",
            medium: "Aquarell / Tusche auf Papier",
            size: "A4",
            availability: "Ein A4-Original verfügbar",
            short: "Eine abstrakte A4-Arbeit aus Aquarell und Tusche auf Papier mit organischen Formen, Schichtungen und präzisen Linien.",
            vibe: "Aquarell / Tusche"
        }
    },
    {
        id: "faces-v3-print",
        category: "print",
        image: "img/optimized/faces-v3.webp",
        thumbnail: "img/optimized/faces-v3-thumb.webp",
        price: null,
        year: 2026,
        featured: 5,
        contactOnly: true,
        en: {
            title: "Faces V3",
            label: "Print",
            medium: "Modified print variant",
            size: "Format by request",
            availability: "Print available by request",
            short: "A modified version of the Abstract Faces work, intensified with color shifts and available as a print.",
            vibe: "Modified faces print"
        },
        de: {
            title: "Faces V3",
            label: "Kunstdruck",
            medium: "Modifizierte Druckvariante",
            size: "Format nach Absprache",
            availability: "Kunstdruck auf Anfrage verfügbar",
            short: "Eine modifizierte Variante der Arbeit Abstract Faces mit verstärkten Farbverschiebungen, als Kunstdruck verfügbar.",
            vibe: "Modifizierter Kunstdruck"
        }
    },
    {
        id: "meditate-print",
        category: "print",
        image: "img/optimized/meditate.webp",
        thumbnail: "img/optimized/meditate-thumb.webp",
        price: 89,
        year: 2026,
        featured: 7,
        en: {
            title: "Meditate",
            label: "Fine-Art Print",
            medium: "Giclee print",
            size: "A4",
            availability: "Available by request",
            short: "A calm figurative piece with organic shapes and precise line work, available as an A4 print.",
            vibe: "Meditative line study"
        },
        de: {
            title: "Meditate",
            label: "Fine-Art-Print",
            medium: "Giclée-Kunstdruck",
            size: "A4",
            availability: "Auf Anfrage verfügbar",
            short: "Eine ruhige figurative Arbeit mit organischen Formen und präziser Linienführung, als A4-Kunstdruck verfügbar.",
            vibe: "Meditative Linienarbeit"
        }
    },
    {
        id: "self-love-print",
        category: "print",
        image: "img/optimized/selflove.webp",
        thumbnail: "img/optimized/selflove-thumb.webp",
        price: 89,
        year: 2025,
        featured: 8,
        en: {
            title: "Self Love",
            label: "Print",
            medium: "Archive print",
            size: "30 x 40 cm",
            availability: "Original not available - print inquiry only",
            short: "An organic figurative composition available as a print. The original is not for sale.",
            vibe: "Organic figure print"
        },
        de: {
            title: "Self Love",
            label: "Kunstdruck",
            medium: "Archiv-Kunstdruck",
            size: "30 x 40 cm",
            availability: "Original nicht verfügbar - Kunstdruck auf Anfrage",
            short: "Eine organische figurative Komposition als Kunstdruck. Das Original steht nicht zum Verkauf.",
            vibe: "Organischer Figuren-Kunstdruck"
        }
    },
    {
        id: "self-love-ii-print",
        category: "print",
        image: "img/optimized/selflove2.webp",
        thumbnail: "img/optimized/selflove2-thumb.webp",
        price: 111,
        year: 2026,
        featured: 6,
        en: {
            title: "Self Love II",
            label: "Print",
            medium: "Archive print",
            size: "40 x 50 cm",
            availability: "Available by request",
            short: "A higher-contrast version of the Self Love series, prepared for print requests.",
            vibe: "High-contrast print"
        },
        de: {
            title: "Self Love II",
            label: "Kunstdruck",
            medium: "Archiv-Kunstdruck",
            size: "40 x 50 cm",
            availability: "Auf Anfrage verfügbar",
            short: "Eine kontrastreichere Arbeit aus der Self-Love-Serie, vorbereitet als Kunstdruck.",
            vibe: "Kontrastreicher Kunstdruck"
        }
    },
    {
        id: "commission",
        category: "commission",
        image: "img/optimized/selflove2.webp",
        thumbnail: "img/optimized/selflove2-thumb.webp",
        price: 222,
        year: 2026,
        featured: 9,
        en: {
            title: "Custom Artwork",
            label: "Commission",
            medium: "Briefing + artwork",
            size: "Custom",
            availability: "Slots by arrangement",
            short: "A custom artwork developed from your brief, available as an original or digitally finished piece.",
            vibe: "Custom artwork"
        },
        de: {
            title: "Individuelles Kunstwerk",
            label: "Auftrag",
            medium: "Briefing + Kunstwerk",
            size: "Individuell",
            availability: "Termine nach Absprache",
            short: "Ein individuelles Kunstwerk nach Briefing, als Original oder digital finalisierte Arbeit.",
            vibe: "Auftragsarbeit"
        }
    },
    {
        id: "festival-mushroom-object",
        category: "commission",
        image: "img/optimized/festival-object.webp",
        thumbnail: "img/optimized/festival-object-thumb.webp",
        price: null,
        year: 2025,
        featured: 11,
        contactOnly: true,
        en: {
            title: "Recycled Festival Object",
            label: "Installation",
            medium: "Recycled found materials / moss / wood",
            size: "Custom site build",
            availability: "By request and location",
            short: "Custom objects built from recycled, found, and local materials for festivals, events, and temporary spaces. The mushroom shown is one project example.",
            vibe: "Recycled object"
        },
        de: {
            title: "Recyceltes Festival-Objekt",
            label: "Installation",
            medium: "Recyceltes Fundmaterial / Moos / Holz",
            size: "Individuell vor Ort",
            availability: "Auf Anfrage und nach Ort",
            short: "Individuelle Objekte aus recycelten, gefundenen und lokalen Materialien für Festivals, Events und temporäre Räume. Der gezeigte Pilz ist ein Projektbeispiel.",
            vibe: "Recycling-Objekt"
        }
    },
    {
        id: "tattoo-motif",
        category: "commission",
        image: "img/optimized/tattoo-sunflower.webp",
        thumbnail: "img/optimized/tattoo-sunflower-thumb.webp",
        price: null,
        year: 2026,
        featured: 12,
        contactOnly: true,
        en: {
            title: "Tattoo Motif",
            label: "Template",
            medium: "Custom linework / tattoo template",
            size: "Developed by agreement",
            availability: "By request and briefing",
            short: "A tattoo motif developed together with the client from idea, placement, symbolism, and line direction. Floral and ornamental examples can guide the process.",
            vibe: "Tattoo template"
        },
        de: {
            title: "Tattoo-Motiv",
            label: "Vorlage",
            medium: "Individuelle Linienarbeit / Tattoo-Vorlage",
            size: "Nach Absprache entwickelt",
            availability: "Auf Anfrage und nach Briefing",
            short: "Ein Tattoo-Motiv, das gemeinsam mit dem Kunden aus Idee, Körperstelle, Symbolik und Linienrichtung entwickelt wird. Florale und ornamentale Beispiele dienen als Richtung.",
            vibe: "Tattoo-Vorlage"
        }
    },
    {
        id: "surface-design-bar",
        category: "commission",
        image: "img/optimized/event-bar-night.webp",
        thumbnail: "img/optimized/event-bar-night-thumb.webp",
        price: null,
        year: 2024,
        featured: 10,
        contactOnly: true,
        en: {
            title: "Surface Design",
            label: "On-site Design",
            medium: "Painting / lettering / visual design",
            size: "Custom surface",
            availability: "By request and briefing",
            short: "Custom surface design for bars, event builds, private spaces, signs, panels, and temporary installations.",
            vibe: "Surface design"
        },
        de: {
            title: "Flächengestaltung",
            label: "Vor-Ort-Gestaltung",
            medium: "Malerei / Schrift / visuelle Gestaltung",
            size: "Individuelle Fläche",
            availability: "Auf Anfrage und nach Briefing",
            short: "Gestaltung verschiedener Flächen für Bars, Events, private Räume, Schilder, Panels und temporäre Installationen.",
            vibe: "Flächendesign"
        }
    },
    {
        id: "event-visual",
        category: "commission",
        image: "img/optimized/event-bar-night.webp",
        thumbnail: "img/optimized/event-bar-night-thumb.webp",
        price: 180,
        year: 2026,
        featured: 13,
        en: {
            title: "Event Visual",
            label: "Design",
            medium: "Event graphics / bar visuals / social",
            size: "Digital, print-ready, or on-site",
            availability: "After briefing",
            short: "Visual direction for events, bars, and culture projects: signs, painted details, print assets, or social visuals.",
            vibe: "Event design"
        },
        de: {
            title: "Eventgestaltung",
            label: "Gestaltung",
            medium: "Eventgrafik / Bar-Gestaltung / Social Media",
            size: "Digital, druckfertig oder vor Ort",
            availability: "Nach Briefing",
            short: "Visuelle Gestaltung für Events, Bars und Kulturprojekte: Schilder, gemalte Details, Druckmedien oder Motive für Social Media.",
            vibe: "Eventgestaltung"
        }
    },
    {
        id: "logo-design",
        category: "commission",
        image: "img/logo.svg",
        thumbnail: "img/logo.svg",
        price: null,
        year: 2026,
        featured: 14,
        contactOnly: true,
        en: {
            title: "Logo / Monogram Design",
            label: "Identity Mark",
            medium: "Monogram / symbol / wordmark",
            size: "Digital files by agreement",
            availability: "By request and briefing",
            short: "A custom visual mark for artists, labels, collectives, events, or small businesses, shown here with my own monogram as reference.",
            vibe: "Identity design"
        },
        de: {
            title: "Logo- / Monogramm-Design",
            label: "Markenzeichen",
            medium: "Monogramm / Symbol / Wortmarke",
            size: "Digitale Dateien nach Absprache",
            availability: "Auf Anfrage und nach Briefing",
            short: "Ein eigenes visuelles Zeichen für Kunstschaffende, Labels, Kollektive, Events oder kleine Unternehmen, hier mit meinem Monogramm als Beispiel.",
            vibe: "Markendesign"
        }
    }
];

const productGrid = document.querySelector("#productGrid");
const sortSelect = document.querySelector("#sortSelect");
const filterButtons = document.querySelectorAll(".filter-btn");
const cartDrawer = document.querySelector("#cartDrawer");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const cartSubtotal = document.querySelector("#cartSubtotal");
const checkoutBtn = document.querySelector("#checkoutBtn");
const clearCartBtn = document.querySelector("#clearCartBtn");
const drawerScrim = document.querySelector(".drawer-scrim");
const productDialog = document.querySelector("#productDialog");
const dialogContent = document.querySelector("#dialogContent");
const contactForm = document.querySelector("#contactForm");
const reviewForm = document.querySelector("#reviewForm");
const languageButtons = document.querySelectorAll(".lang-btn");
const heroImage = document.querySelector(".hero-art");

let activeFilter = "all";
let currentLanguage = getInitialLanguage();
let cart = loadCart().filter((item) => {
    const product = getProduct(item.id);
    return product && !isContactOnly(product);
});
saveCart();

function t(key) {
    return translations[currentLanguage][key] || translations.en[key] || key;
}

function getInitialLanguage() {
    const queryLanguage = new URLSearchParams(window.location.search).get("lang");
    if (SUPPORTED_LANGUAGES.includes(queryLanguage)) return queryLanguage;

    const savedLanguage = localStorage.getItem("mindMatterLanguage");
    if (SUPPORTED_LANGUAGES.includes(savedLanguage)) return savedLanguage;

    const browserLanguages = navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language];

    if (browserLanguages.some((language) => language.toLowerCase().startsWith("de"))) {
        return "de";
    }

    if (typeof Intl.Locale === "function") {
        const matchesGermanRegion = browserLanguages.some((language) => {
            try {
                return GERMAN_REGIONS.has(new Intl.Locale(language).region);
            } catch (error) {
                return false;
            }
        });

        if (matchesGermanRegion) return "de";
    }

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return GERMAN_TIME_ZONES.has(timeZone) ? "de" : "en";
}

function getLocalizedProduct(product) {
    return { ...product, ...product[currentLanguage] };
}

function setLanguage(language, persist = true) {
    if (!SUPPORTED_LANGUAGES.includes(language)) return;

    currentLanguage = language;
    document.documentElement.lang = language;
    document.title = t("meta.title");

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute("content", t("meta.description"));
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        element.textContent = t(element.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
        element.setAttribute("aria-label", t(element.dataset.i18nAria));
    });

    languageButtons.forEach((button) => {
        const isActive = button.dataset.lang === language;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    if (persist) {
        localStorage.setItem("mindMatterLanguage", language);
    }

    renderProducts();
    renderCart();

    if (productDialog.open && productDialog.dataset.productId) {
        renderProductDialog(productDialog.dataset.productId);
    }
}

function formatPrice(value) {
    return new Intl.NumberFormat(currentLanguage === "de" ? "de-DE" : "en-US", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0
    }).format(value);
}

function loadCart() {
    try {
        return JSON.parse(localStorage.getItem("mindMatterCart")) || [];
    } catch (error) {
        return [];
    }
}

function saveCart() {
    localStorage.setItem("mindMatterCart", JSON.stringify(cart));
}

function getProduct(id) {
    return products.find((product) => product.id === id);
}

function isContactOnly(product) {
    return Boolean(product?.contactOnly || product?.price == null);
}

function getPriceLabel(product) {
    return isContactOnly(product) ? t("price.onRequest") : formatPrice(product.price);
}

function buildProductInquiryMailto(baseProduct) {
    const product = getLocalizedProduct(baseProduct);
    const subject = `${t("mail.productInquirySubject")} - ${product.title}`;
    const body = [
        t("mail.greeting"),
        "",
        t("mail.productInquiryIntro"),
        "",
        `${t("dialog.medium")}: ${product.medium}`,
        `${t("dialog.format")}: ${product.size}`,
        `${t("dialog.status")}: ${product.availability}`,
        "",
        `${t("mail.name")}`,
        `${t("mail.location")}`,
        "",
        t("mail.signoff")
    ].join("\n");

    return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function getVisibleProducts() {
    const selected = activeFilter === "all"
        ? [...products]
        : products.filter((product) => product.category === activeFilter);

    const sortMode = sortSelect.value;
    selected.sort((a, b) => {
        if (sortMode === "price-low") {
            const priceA = a.price ?? Number.POSITIVE_INFINITY;
            const priceB = b.price ?? Number.POSITIVE_INFINITY;
            return priceA - priceB;
        }
        if (sortMode === "price-high") {
            const priceA = a.price ?? Number.NEGATIVE_INFINITY;
            const priceB = b.price ?? Number.NEGATIVE_INFINITY;
            return priceB - priceA;
        }
        if (sortMode === "new") return b.year - a.year;
        return a.featured - b.featured;
    });

    return selected;
}

function buildProductImage(product, alt) {
    const thumbnail = product.thumbnail || product.image;
    return `<img src="${thumbnail}" alt="${alt}" loading="lazy" decoding="async" fetchpriority="low">`;
}

function renderProducts() {
    productGrid.innerHTML = getVisibleProducts().map((baseProduct) => {
        const product = getLocalizedProduct(baseProduct);
        const contactOnly = isContactOnly(baseProduct);
        const productPrice = getPriceLabel(baseProduct);
        return `
            <article class="product-card" style="--accent: ${productAccent(product.category)}">
                <div class="product-media">
                    ${buildProductImage(baseProduct, product.title)}
                    <span class="product-badge">${product.label}</span>
                </div>
                <div class="product-body">
                    <div class="product-meta">
                        <span>${product.vibe}</span>
                        <span class="product-price">${productPrice}</span>
                    </div>
                    <h3>${product.title}</h3>
                    <p>${product.short}</p>
                    <div class="product-actions">
                        <button class="button button-ghost quick-view" type="button" data-product="${product.id}">${t("buttons.details")}</button>
                        ${contactOnly
                            ? `<a class="button button-primary" href="${buildProductInquiryMailto(baseProduct)}">${t("buttons.email")}</a>`
                            : `<button class="button button-primary add-to-cart" type="button" data-product="${product.id}">${t("buttons.add")}</button>`
                        }
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

function productAccent(category) {
    if (category === "original") return "#ff4d7d";
    if (category === "print") return "#41ead4";
    return "#ffb000";
}

function addToCart(id) {
    const product = getProduct(id);
    if (!product) return;

    if (isContactOnly(product)) {
        window.location.href = buildProductInquiryMailto(product);
        return;
    }

    const existing = cart.find((item) => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id, quantity: 1 });
    }

    saveCart();
    renderCart();
    openCart();
}

function changeQuantity(id, amount) {
    const item = cart.find((line) => line.id === id);
    if (!item) return;

    item.quantity += amount;
    if (item.quantity <= 0) {
        cart = cart.filter((line) => line.id !== id);
    }

    saveCart();
    renderCart();
}

function removeFromCart(id) {
    cart = cart.filter((line) => line.id !== id);
    saveCart();
    renderCart();
}

function renderCart() {
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => {
        const product = getProduct(item.id);
        return product && !isContactOnly(product) ? sum + product.price * item.quantity : sum;
    }, 0);

    cartCount.textContent = totalQuantity;
    cartSubtotal.textContent = formatPrice(subtotal);

    if (!cart.length) {
        cartItems.innerHTML = `<p class="empty-cart">${t("cart.empty")}</p>`;
        return;
    }

    cartItems.innerHTML = cart.map((item) => {
        const baseProduct = getProduct(item.id);
        if (!baseProduct) return "";
        const product = getLocalizedProduct(baseProduct);
        const linePrice = isContactOnly(baseProduct)
            ? t("price.onRequest")
            : formatPrice(product.price * item.quantity);

        return `
            <article class="cart-line">
                <img src="${baseProduct.thumbnail || product.image}" alt="" loading="lazy" decoding="async">
                <div>
                    <h3>${product.title}</h3>
                    <p>${product.label} - ${product.size}</p>
                    <div class="quantity-control" aria-label="${t("quantity.for")} ${product.title}">
                        <button type="button" data-quantity="-1" data-product="${product.id}" aria-label="${t("quantity.decrease")}">-</button>
                        <span>${item.quantity}</span>
                        <button type="button" data-quantity="1" data-product="${product.id}" aria-label="${t("quantity.increase")}">+</button>
                    </div>
                </div>
                <div>
                    <p class="line-price">${linePrice}</p>
                    <button class="remove-line" type="button" data-remove="${product.id}" aria-label="${t("quantity.remove")} ${product.title}">x</button>
                </div>
            </article>
        `;
    }).join("");
}

function openCart() {
    document.body.classList.add("cart-open");
    cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
    document.body.classList.remove("cart-open");
    cartDrawer.setAttribute("aria-hidden", "true");
}

function renderProductDialog(id) {
    const baseProduct = getProduct(id);
    if (!baseProduct) return;
    const product = getLocalizedProduct(baseProduct);
    const contactOnly = isContactOnly(baseProduct);
    const productPrice = getPriceLabel(baseProduct);
    productDialog.dataset.productId = id;

    dialogContent.innerHTML = `
        <img src="${product.image}" alt="${product.title}" decoding="async">
        <div class="dialog-copy">
            <p class="eyebrow">${product.label}</p>
            <h2>${product.title}</h2>
            <p>${product.short}</p>
            <ul class="detail-list">
                <li><span>${t("dialog.medium")}</span><strong>${product.medium}</strong></li>
                <li><span>${t("dialog.format")}</span><strong>${product.size}</strong></li>
                <li><span>${t("dialog.status")}</span><strong>${product.availability}</strong></li>
                <li><span>${t("dialog.price")}</span><strong>${productPrice}</strong></li>
            </ul>
            <div class="product-actions">
                ${
                    contactOnly
                        ? `<a class="button button-primary" href="${buildProductInquiryMailto(baseProduct)}">${t("buttons.email")}</a>
                           <a class="button button-ghost" href="${INSTAGRAM_URL}" target="_blank" rel="noreferrer">${t("buttons.instagram")}</a>`
                        : `<button class="button button-primary add-to-cart" type="button" data-product="${product.id}">${t("buttons.addToCart")}</button>`
                }
            </div>
        </div>
    `;
}

function openProductDialog(id) {
    renderProductDialog(id);

    if (typeof productDialog.showModal === "function") {
        productDialog.showModal();
    } else {
        productDialog.setAttribute("open", "");
    }
}

function closeProductDialog() {
    if (typeof productDialog.close === "function") {
        productDialog.close();
    } else {
        productDialog.removeAttribute("open");
        dialogContent.innerHTML = "";
        productDialog.removeAttribute("data-product-id");
    }
}

function sendCheckout() {
    if (!cart.length) {
        openCart();
        return;
    }

    const lines = cart.map((item) => {
        const baseProduct = getProduct(item.id);
        if (!baseProduct || isContactOnly(baseProduct)) return "";
        const product = getLocalizedProduct(baseProduct);
        return `${item.quantity} x ${product.title} (${product.label}) - ${formatPrice(product.price * item.quantity)}`;
    }).filter(Boolean);

    const subtotal = cart.reduce((sum, item) => {
        const product = getProduct(item.id);
        return product && !isContactOnly(product) ? sum + product.price * item.quantity : sum;
    }, 0);

    const body = [
        t("mail.greeting"),
        "",
        t("mail.checkoutIntro"),
        ...lines,
        "",
        `${t("mail.subtotal")}: ${formatPrice(subtotal)}`,
        "",
        t("mail.questions"),
        "",
        t("mail.name"),
        t("mail.location"),
        "",
        t("mail.signoff")
    ].join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(t("mail.checkoutSubject"))}&body=${encodeURIComponent(body)}`;
}

function submitContactForm(event) {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = `${t("mail.contactSubject")} ${name}`;
    const body = [
        `Name: ${name}`,
        `${t("form.email")}: ${email}`,
        "",
        message
    ].join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function submitReviewForm(event) {
    event.preventDefault();
    const formData = new FormData(reviewForm);
    const reviewer = formData.get("reviewer");
    const rating = formData.get("rating");
    const purchase = formData.get("purchase");
    const review = formData.get("review");

    const body = [
        t("mail.greeting"),
        "",
        t("mail.reviewIntro"),
        "",
        `Name: ${reviewer}`,
        `${t("mail.reviewPurchase")}: ${purchase}`,
        `${t("mail.reviewRating")}: ${rating} / 5`,
        "",
        `${t("mail.reviewText")}:`,
        review,
        "",
        t("mail.signoff")
    ].join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(t("mail.reviewSubject"))}&body=${encodeURIComponent(body)}`;
}

function initReveal() {
    const revealItems = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
        revealItems.forEach((item) => item.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.16 });

    revealItems.forEach((item) => observer.observe(item));
}

function prefersReducedData() {
    const connection = navigator.connection
        || navigator.mozConnection
        || navigator.webkitConnection;
    const slowConnection = connection
        && ["slow-2g", "2g", "3g"].includes(connection.effectiveType);

    return Boolean(connection?.saveData || slowConnection);
}

function initRandomHeroImage() {
    if (!heroImage || !HERO_IMAGES.length) return;

    let activeHeroIndex = HERO_IMAGES.findIndex(
        (image) => image.src === heroImage.getAttribute("src")
    );
    let heroTimer = null;

    function getNextHeroIndex() {
        if (HERO_IMAGES.length === 1) return 0;

        let nextIndex = activeHeroIndex;
        while (nextIndex === activeHeroIndex) {
            nextIndex = Math.floor(Math.random() * HERO_IMAGES.length);
        }
        return nextIndex;
    }

    function setRandomHeroImage() {
        const nextIndex = getNextHeroIndex();
        const nextImage = HERO_IMAGES[nextIndex];
        activeHeroIndex = nextIndex;

        heroImage.classList.add("is-fading");
        window.setTimeout(() => {
            heroImage.src = nextImage.src;
            heroImage.alt = nextImage.alt;
            heroImage.classList.remove("is-fading");
        }, 220);
    }

    if (prefersReducedData() || window.matchMedia("(max-width: 760px)").matches) {
        return;
    }

    function startHeroRotation() {
        if (heroTimer || document.hidden) return;
        heroTimer = window.setInterval(setRandomHeroImage, HERO_IMAGE_INTERVAL);
    }

    function stopHeroRotation() {
        if (!heroTimer) return;
        window.clearInterval(heroTimer);
        heroTimer = null;
    }

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            stopHeroRotation();
        } else {
            startHeroRotation();
        }
    });

    startHeroRotation();
}

function initAmbientField() {
    const canvas = document.querySelector("#ambientField");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canvas || reduceMotion || prefersReducedData()) return;

    const context = canvas.getContext("2d");
    const palette = ["#b7ff3c", "#41ead4", "#ff4d7d", "#ffb000"];
    const pointer = { x: 0, y: 0, active: false };
    let width = 0;
    let height = 0;
    let nodes = [];

    function resize() {
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = Math.floor(width * ratio);
        canvas.height = Math.floor(height * ratio);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        context.setTransform(ratio, 0, 0, ratio, 0, 0);

        const count = Math.min(86, Math.max(42, Math.floor(width / 18)));
        nodes = Array.from({ length: count }, (_, index) => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.34,
            vy: (Math.random() - 0.5) * 0.34,
            radius: 1 + Math.random() * 1.8,
            color: palette[index % palette.length]
        }));
    }

    function draw() {
        context.clearRect(0, 0, width, height);
        context.globalCompositeOperation = "lighter";

        nodes.forEach((node, index) => {
            node.x += node.vx;
            node.y += node.vy;

            if (node.x < -20) node.x = width + 20;
            if (node.x > width + 20) node.x = -20;
            if (node.y < -20) node.y = height + 20;
            if (node.y > height + 20) node.y = -20;

            if (pointer.active) {
                const dx = pointer.x - node.x;
                const dy = pointer.y - node.y;
                const distance = Math.hypot(dx, dy);
                if (distance < 150) {
                    node.x -= dx * 0.002;
                    node.y -= dy * 0.002;
                }
            }

            context.beginPath();
            context.fillStyle = node.color;
            context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            context.fill();

            for (let nextIndex = index + 1; nextIndex < nodes.length; nextIndex += 1) {
                const next = nodes[nextIndex];
                const dx = node.x - next.x;
                const dy = node.y - next.y;
                const distance = Math.hypot(dx, dy);
                if (distance < 118) {
                    context.beginPath();
                    context.strokeStyle = `rgba(246, 241, 220, ${0.11 - distance / 1200})`;
                    context.lineWidth = 0.8;
                    context.moveTo(node.x, node.y);
                    context.lineTo(next.x, next.y);
                    context.stroke();
                }
            }
        });

        context.globalCompositeOperation = "source-over";
        requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", (event) => {
        pointer.x = event.clientX;
        pointer.y = event.clientY;
        pointer.active = true;
    });
    window.addEventListener("pointerleave", () => {
        pointer.active = false;
    });

    resize();
    draw();
}

function setActiveFilter(button) {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    activeFilter = button.dataset.filter;
    renderProducts();
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => setActiveFilter(button));
    button.addEventListener("pointerup", () => setActiveFilter(button));
});

languageButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        setLanguage(button.dataset.lang);
    });
});

sortSelect.addEventListener("change", renderProducts);

document.addEventListener("click", (event) => {
    const quickViewButton = event.target.closest(".quick-view");
    const addButton = event.target.closest(".add-to-cart, .add-service");
    const quantityButton = event.target.closest("[data-quantity]");
    const removeButton = event.target.closest("[data-remove]");

    if (quickViewButton) {
        openProductDialog(quickViewButton.dataset.product);
    }

    if (addButton) {
        const fromDialog = addButton.closest("#productDialog");
        if (fromDialog) {
            closeProductDialog();
        }
        addToCart(addButton.dataset.product);
    }

    if (quantityButton) {
        changeQuantity(quantityButton.dataset.product, Number(quantityButton.dataset.quantity));
    }

    if (removeButton) {
        removeFromCart(removeButton.dataset.remove);
    }
});

document.querySelectorAll(".cart-toggle").forEach((button) => {
    button.addEventListener("click", openCart);
});

document.querySelector(".close-cart").addEventListener("click", closeCart);
drawerScrim.addEventListener("click", closeCart);
checkoutBtn.addEventListener("click", sendCheckout);
clearCartBtn.addEventListener("click", () => {
    cart = [];
    saveCart();
    renderCart();
});

document.querySelector(".dialog-close").addEventListener("click", closeProductDialog);
productDialog.addEventListener("close", () => {
    dialogContent.innerHTML = "";
    productDialog.removeAttribute("data-product-id");
});
productDialog.addEventListener("click", (event) => {
    if (event.target === productDialog) {
        closeProductDialog();
    }
});

contactForm.addEventListener("submit", submitContactForm);
reviewForm.addEventListener("submit", submitReviewForm);

setLanguage(currentLanguage, false);
initReveal();
initRandomHeroImage();
initAmbientField();
