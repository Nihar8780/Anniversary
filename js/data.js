/* =========================================================
   DENEB × VEGA — the ONE place you edit.
   Drop files into assets/ and change the paths/text below.
   Missing files are fine: a soft placeholder is shown.
   ========================================================= */
const SITE_CONFIG = {
  girlfriend: { primaryNickname: "Deneb", nicknames: ["Deneb", "Bhonduu", "Jaaan", "Babbyy"] },

  intro: { eyebrow: "a universe made for one", title: "Deneb", enterLabel: "Enter our universe" },

  music: {
    main: "assets/audio/main-theme.mp3",
    volume: 0.55,
    returnToMainOnClose: true   // false = keep the memory's song playing after closing
  },

  deneb: {
    pin: "2112",                                   // <- change PIN here
    music: "assets/audio/ere BIN.mp3",
    cover: "assets/images/photos/Synced.jpg",   // round photo inside the music disc
    playerLabel: "For my heart",
    lockTitle: "Deneb",
    lockHint: "a little secret lives here…",
    secret: {
      title: "For you, Babbyy",
      date: "14.09.2026",
      paragraphs: [
        "Firstly, Happyy Anniversaryyy Babbyy.",
        "I Loveee Youuuu Sooo Sooo Muuchh!!!, Aapde Besttestt Friend's Hata Pehla Have Aapde Relationship Ma Chhiye But Aapde Ema Pn Besttest Friends J Chhiye Mane Exact Date Yaad Nathi Ke Aapde Exactly Kyare & Kai Rite Malya Hata But Etlu Jarur Kiash Ke E Moment Aapda Maate Luckiest Hse!!!! We Are Always Greatful To GANNUUU BAPPAAA & KAANNUUU TO Bless Us & Protect Our Love & Relationship Foreverrrr. Aapde Boo J Sara Chhiye As A Couple Ek Bija Maate,  Hu Tane Promise Aapu Chhu Ke Hu Tane Kyarey Naii Chhodu. Alwayas TARI SATH RAISH, KOI DIVAS TARO HAATH NAII CHHODU, MARI PAASE SACHE WORDS NATHI KE HU, 'KETLO GREATFUL HAISH KE MANE MARI PARTNER & BESTTESTT FRIEND EK J PERSON MA MALI GAYU' Duniya No Besttestt Bond Aa J Chhe AAPDE BANNE ALWAYS SATHE J REHSU KOI DIVAS EKLA NAIII MUKIYE, Game Etlo Life Ma Hardest Phase Aave Aapde Ek Bija No SAATH Kyarey Naii Chhodiye!!!!, Aapde 'SATHE HATA', 'SATHE CHHIYE', 'SATHE REHSU' & 2032 Ma Ek Bija Sathe J Lagan Karsu. Tension Nai Le!!! Aapda PARENTS MAANI JASE!! Aapde Aapdo Love J Etlo Strong Rakhsu Ke Aapda Parents PnEni Kadar Krse!!! ",
        "Aapde Sathe Mali Ne Aapdi Jetli WISHES & DREAMS HATA E BADHU J PURU KARSU!!!",
        "-AAPDO PURESTT LOVEE!!!!!",
        "-AAPDU GHAR",
        "-AAPDI 1111&7777",
        "-AAPDA PARENTS NE PROUD FEEL KARAVSU",
        "-AAPDA BADHA SATHE NA SAPNAO. ",
        "-GANAPTI BAPPAA NE & KRISHNA BHAGWAN NE EK J PRAY CHHE 'AMNE ALWAYS SATHE RAKHJO, KHUSH RAKHJO, MARI DENEB NI HEALTH SARI RAKHJO 'ENE KOI DIVAS DUKHI NAI THAVA DETA, ND ENA BADHA J HARD PHASE MA MANE ENI SATHE RAKHJO, 'KE JYARE ENI LIFE MA PROBLEM AAVE HU ENI BAAJU MA HAATH MA HAATH PAKDI NE BESELO HOU'",
        "-ONCE AGAIN LOVEEEEE YOUUUUU SOO SOO SOO MUCHHH MYYY LITTLE BABY DENEB!!!!",
      ],
      signature: "— YOUURR LOVE VEGAAA"
    }
  },

  // Chapters = tall scroll sections (100vh each). Order = journey order.
  // Our special calendar (shown beside the secret letter). Months are inclusive.
  // NOTE: November has 30 days, so "31 Nov 2026" ends on 30 Nov 2026.
  calendar: { start: "2025-11", end: "2026-11" },

  chapters: [
    { id: "c1", no: "01", title: "The Beginning",       text: "Somewhere between all the stars,<br>I found my favorite one." },
    { id: "c2", no: "02", title: "Two Stars",           text: "One keeps a secret. One keeps a promise." },
    { id: "c3", no: "03", title: "Our Little Galaxy",   text: "Drift a little. Some worlds hold something." },
    { id: "c4", no: "04", title: "Moments That Stayed", text: "The ones that never quite left." },
    { id: "c5", no: "05", title: "Things I Never Want to Forget", text: "Said softly, kept carefully." },
    { id: "c6", no: "06", title: "The Secret Star",     text: "Not everything is meant to be easy to find." },
    { id: "c7", no: "07", title: "For My Babbyy",       text: "Some lights are only for you." },
    { id: "end", title: "Until the Stars Run Out", final: true,
      text: "If the universe had a favorite place,<br>I'd still choose wherever you are." }
  ]
};

/* Celestial anchors. x = % across, y = vh from the top of the journey.
   depth: 1 = scrolls normally, <1 lingers (far), >1 rushes past (near). */
const ANCHORS = {
  deneb: { x: 64, y: 62, size: 120, depth: 0.92 },
  vega:  { x: 24, y: 38, size: 86,  depth: 0.85, memoryId: "vega-message" }
};

/* memoryType: photo | video | song | letter | message | gallery | secret
   Add as many as you like — copy a block, give it a new id & position. */
const MEMORIES = [
  { id: "vega-message", memoryType: "message", title: "Vega",
    date: "14.10.2026",
    message: "Heyyy, Deneb this is your Vega. I just want to make our 1 monnth anniversary specal. I lovee youu so muchhh. I hope you like ths gift. Today is exactly 1 month since we are together in a relationship. I hope God blesses us and protects our love. loveee youuu Jaannuuu.",
    music: "" },

  { id: "planet-01", objectType: "planet", memoryType: "photo", x: 70, y: 255, size: 74, hue: "rose", depth: 1.05,
    title: "Our Memory", date: "10-02-2026",
    media: "assets/images/photos/My8.jpeg", caption: "Bestttesttt Huggg Of Vega & Deneb", music: "" },

  { id: "planet-02", objectType: "planet", memoryType: "video", x: 28, y: 330, size: 92, hue: "lavender", depth: 0.95,
    title: "Happyy 1 Month Anniversary Myy Penguin!!!", date: "14.10.2026",
    media: "assets/videos/LOML.mp4", caption: "I LOVEEEE YOUUUU....", music: "" },

  { id: "planet-03", objectType: "planet", memoryType: "song", x: 66, y: 410, size: 64, hue: "gold", depth: 1.1,
    title: "Our Song", artist: "This Song Dedicated To My Babbyy Deneb", 
    caption: "Cause Every Lyrics Was Meant For You.", cover: "assets/images/photos/My50.jpg",   // round photo inside the disc
    music: "assets/audio/HUMSAFAR.mp3" },

  { id: "planet-04", objectType: "planet", memoryType: "letter", x: 32, y: 505, size: 80, hue: "cream", depth: 0.98,
    title: "A Letter For Myy Breathing Like Jaaann", date: "14.10.2026",
    paragraphs: ["Promises:", "- I Never Leave Youuu!!! Aa Jaadduu Taro J Chhe Koi Divas Naii Chhodu", "- I Never Hurt Youuu!!!", "- I Always Try To Make You Happy", "- Hu Tane Koi Divas RADAVISH NAIII!!!", "- Tane Koi Divas Dukhi ai Thava Dau!", "- Hu Always Badhi J Situation Ma TARO Sath Aapish", "- Hu Always Tari Badhi J Vaat Sambhlish", "- Hu Koi Divas Tane IGNORED Feel Nai Karavu", "- Hu Maro LOVE Tara MMaate Koi Divas Ochho Nai Karu!! Jevo Maro LOVE Aaje Chhe Evo J Mari Last Breathe Sudhi Rakhish", "- Hu Tari Badhi J Vaat NANI THI NANI THI NANI VAAT Sambhdish"], signature: "— Youur Gandduu" },

  { id: "planet-05", objectType: "planet", memoryType: "gallery", x: 72, y: 585, size: 70, hue: "blue", depth: 1.04,
    title: "BESTTESTT SELFIEESSS!!!",
    media: ["assets/images/photos/My10.jpeg"],
    caption: "Meee Withh Myy Deneb" },

  /* Chapter 7 — small white stars, each opens a vintage polaroid */
  { id: "polaroid-01", objectType: "polaroid", memoryType: "polaroid", x: 18, y: 622, size: 30, depth: 0.94, tilt: -3,
    title: "BHONDU RANI-SAHIBA", date: "I LOVEE YOUUUU",
    media: "assets/images/photos/P1.jpeg", caption: "Myyyy Universe" },

  { id: "polaroid-02", objectType: "polaroid", memoryType: "polaroid", x: 76, y: 640, size: 15, depth: 0.98, tilt: 2,
    title: "BHONDUUU", date: "I LOVEE YOUUUU",
    media: "assets/images/photos/P2.jpeg", caption: "Myyy Breathe" },

  { id: "polaroid-03", objectType: "polaroid", memoryType: "polaroid", x: 40, y: 662, size: 24, depth: 1.02, tilt: -2,
    title: "PENGUIN", date: "I LOVEE YOUUUU",
    media: "assets/images/photos/P3.jpeg", caption: "Myyyy Hearttt" },

  { id: "polaroid-04", objectType: "polaroid", memoryType: "polaroid", x: 82, y: 690, size: 13, depth: 1.06, tilt: 3,
    title: "RJ BHONDUU", date: "I LOVEE YOUUUU",
    media: "assets/images/photos/P4.jpeg", caption: "Myyyy Soul" },

  { id: "polaroid-05", objectType: "polaroid", memoryType: "polaroid", x: 24, y: 696, size: 36, depth: 1.10, tilt: -1,
    title: "BHUKHAD BHONDU", date: "I LOVEE YOUUUU",
    media: "assets/images/photos/P5.jpeg", caption: "Myyyy Cryy Babbyyy" },

  { id: "polaroid-06", objectType: "polaroid", memoryType: "polaroid", x: 12, y: 708, size: 38, depth: 0.94, tilt: -2,
    title: "PENGIII", date: "I LOVEE YOUUUU",
    media: "assets/images/photos/P6.jpeg", caption: "Myyyy Everythinhgggg" },

  { id: "polaroid-07", objectType: "polaroid", memoryType: "polaroid", x: 88, y: 716, size: 14, depth: 0.98, tilt: 3,
    title: "MY POOKIE", date: "I LOVEE YOUUUU",
    media: "assets/images/photos/P7.jpeg", caption: "Myyyy Reasonn Of Smilee" },

  { id: "polaroid-08", objectType: "polaroid", memoryType: "polaroid", x: 34, y: 728, size: 18, depth: 1.02, tilt: 2,
    title: "MY CUUTUUU", date: "I LOVEE YOUUUU",
    media: "assets/images/photos/P8.jpeg", caption: "Myyyy Loveeee" },

  { id: "polaroid-09", objectType: "polaroid", memoryType: "polaroid", x: 70, y: 736, size: 30, depth: 1.06, tilt: -3,
    title: "MYY BETTER HALF", date: "I LOVEE YOUUUU",
    media: "assets/images/photos/P9.jpeg", caption: "Myyyy Pookkiieee" },

  { id: "polaroid-10", objectType: "polaroid", memoryType: "polaroid", x: 8, y: 752, size: 12, depth: 0.90, tilt: 1,
    title: "MYY BABBYY", date: "i LOVEE YOUUUU",
    media: "assets/images/photos/P10.jpeg", caption: "Myyyy Wifeyyyy" },

  { id: "polaroid-11", objectType: "polaroid", memoryType: "polaroid", x: 92, y: 766, size: 26, depth: 0.94, tilt: -2,
    title: "BABU", date: "I LOVEE YOUUUU",
    media: "assets/images/photos/P11.jpeg", caption: "Myyyy Blushhyyy" },

  { id: "polaroid-12", objectType: "polaroid", memoryType: "polaroid", x: 22, y: 778, size: 16, depth: 0.98, tilt: 2,
    title: "LOML", date: "I LOVEE YOUUUU",
    media: "assets/images/photos/p12.png", caption: "Myyyy Babbyyyy" },

  { id: "polaroid-13", objectType: "polaroid", memoryType: "polaroid", x: 78, y: 788, size: 40, depth: 1.02, tilt: -1,
    title: "ARDHANGINI", date: "I LOVEE YOUUUU",
    media: "assets/images/photos/p13.png", caption: "Myyyy Ardhangini" }
];

/* Special dates on the secret calendar. Format YYYY-MM-DD.
   Hover (or tap) a glowing date to show its memory. Photo is optional ("" = none).
   These three are PLACEHOLDERS — replace/add your own. */
const SPECIAL_DATES = [
  { date: "2025-11-01", title: "I Don't Think", text: "That My LOML is YOUU & we are in same college", photo: "assets/images/photos/Synced.jpg" },
  { date: "2025-11-11", title: "Magical Day / GOD'S PLAN", text: "We Met And Started Knowing Eachother Mutually Like Name And You Thought I'm 'PATEL' But I'm Your Makhana, And We Go To PhotoBooth", photo: "assets/images/photos/PhotoBooth.jpeg" },
  { date: "2025-11-21", title: "My Penguin's Birthday", text: "It's Your Birthday, And I Posted A Story Of Yours 1st Time ", photo: "" },
  { date: "2025-11-27", title: "Someone Gives A Nickname", text: "On This Day Youu Give Me A Nickname 'JAADDDUUUU' Besttestt Nickname Ever You Give, Thank YOUU!! LOVEEE YOUUU", photo: "assets/images/photos/Jadddu.jpg" },
  { date: "2025-12-01", title: "Bestt Friends", text: "On This Day We Clicked 1st Photo As A BEST FRIENDS, We Are At KnockOut And We Take Mirror Selfie", photo: "" },
  { date: "2025-12-07", title: "My Sweet Bhukhad Bhondu", text: "On This Day My Deneb Shared Me HER 1st Face Snap Of Eating 'RABDI JALEBI'", photo: "assets/images/photos/My1.jpeg" },
  { date: "2025-12-19", title: "Most Precious Day For Me", text: "On This Day I Give You Mostt Meaningful And Loving NickName 'DENEB' Which I tell You After Somedays Of Giving Deneb Was 19th Brigthest In Universe And That Day Was 19th Dec.", photo: "assets/images/photos/My.jpeg" },
  { date: "2025-12-31", title: "Our 1st Suit & Saree Day", text: "On This Day We Are Celebrating Our 1st Suit & Saree Day As A Bessttestt Friends That Day We Clicked Our Besttestt Photo!!!", photo: "assets/images/photos/My2.jpeg" },
  { date: "2026-01-14", title: "Myyy Dolphin!!", text: "On This Day Myy Deneb Share Her Pic With A 'DOLPHIN BALOON' And She Looks Soo Much Beautiful & Cuteee!!!", photo: "assets/images/photos/My3.jpeg" },
  { date: "2026-01-27", title: "Bestttestt Momenttss", text: "On This Day In College We Changed Sllipers And That Day We Doo So Much Mastii!!!!!", photo: "assets/images/photos/My4.jpeg" },
  { date: "2026-01-22", title: "My Parent's Anniversary", text: "On This Day My Parent's Marriage Anniversary And She Celebrated My Parents Anniversary Like Her Own Parents That Day She Earned So Much Respect And Love That Day From Meee!!", photo: "assets/images/photos/My6.jpeg" },
  { date: "2026-02-02", title: "Myy Pookiies Magical Eye's", text: "On This Day She Shared Her Besttestt Eye's Photo Ever My Babbyy's Light Brown Magical Eye's In Sunlit", photo: "assets/images/photos/My41.jpeg" },
  { date: "2026-02-05", title: "2 Cuutiieess", text: "On This Day We Are 2 Bhonduss!!!, We Are Besttestt With Together We Both Don't Know That We Fell In Love In Future.", photo: "assets/images/photos/My5.jpeg" },
  { date: "2026-02-07", title: "Month Of Love", text: "On This Day We Are Together We Do So Much Lovely Things!!! That Day We Laughed Sooo Soo Muchh!!!.", photo: "assets/images/photos/My7.jpeg" },
  { date: "2026-02-10", title: "Month Of Love", text: "On This Day We Are Together We Do So Much Lovely Things!!! That Day We Laughed Sooo Soo Muchh!!!.", photo: "assets/images/photos/My8.jpeg" },
  { date: "2026-02-11", title: "Month Of Love", text: "On This Day We Are Together We Do So Much Lovely Things!!! That Day We Laughed Sooo Soo Muchh!!!.", photo: "assets/images/photos/My9.jpeg" },
  { date: "2026-02-12", title: "Month Of Love", text: "On This Day We Are Together We Do So Much Lovely Things!!! That Day We Laughed Sooo Soo Muchh!!!.", photo: "assets/images/photos/My10.jpeg" },
  { date: "2026-02-13", title: "Month Of Love", text: "On This Day We Are Together We Do So Much Lovely Things!!! That Day We Laughed Sooo Soo Muchh!!!.", photo: "assets/images/photos/My11.jpeg" },
  { date: "2026-02-14", title: "Month Of Love", text: "On This Day It Was Valentines Day ", photo: "assets/images/photos/My12.jpeg" },
  { date: "2026-02-23", title: "Always 1st In Her Priority", text: "On This Day She Cut Her Hairs And After Cutting She Send 1st Photo Of Her To Me!!! It's Unforgotabble Memory For Me Forever", photo: "assets/images/photos/My14.jpeg" },
  { date: "2026-03-02", title: "Myyy Cuutuu!!!", text: "On This Day She Wears A Short Kurti Choose By Me!!! & Send Me Her Mirror Selfie ", photo: "assets/images/photos/My13.jpeg" },
  { date: "2026-03-04", title: "Myyy Universe!!!", text: "On This Day Was Holi & She Clicked Her Most Beautiful Photo And She Send Those All Photos To MEEEE!!!", photo: "assets/images/photos/My15.jpeg" },
  { date: "2026-03-10", title: "Myyy EVERYTHINGG!!!", text: "On This Day She Shared Her Bestest Photo Which She Also Set In Her IG Profile Pic", photo: "assets/images/photos/My16.jpeg" },
  { date: "2026-03-14", title: "Myyy Little Babyy!!!", text: "On This Day She Shared Her Bestestttt!!!! Childhood Pic Ever", photo: "assets/images/photos/My17.jpeg" },
  { date: "2026-03-30", title: "Myyy Pookie Girl!!!", text: "On This Day She Shared Her Virtual Kisiiee Photo", photo: "assets/images/photos/My18.jpeg" },
  { date: "2026-04-02", title: "Myy Besttest Editl!!!", text: "On This Day I Edit Her Most Beautifuk Video On 'TEENAGE DREAM SONG'", photo: "" },
  { date: "2026-04-04", title: "She sing & I Danced", text: "On This Day We Are In Turf Of Our College And We She Started Singing Ghoomar & I Danced On That Song So Magical Moment For Me ", photo: "assets/images/photos/My19.jpeg" },
  { date: "2026-04-06", title: "Myy Magical eyes", text: "On This Day We Are In Turf Of Our College And We She Started Singing Ghoomar & I Danced On That Song So Magical Moment For Me ", photo: "assets/images/photos/My20.jpeg" },
  { date: "2026-04-09", title: "Most Beautiful Eye's", text: "On This Day She Shared Her Radha Eye's Pic ", photo: "assets/images/photos/My21.jpeg" },
  { date: "2026-04-20", title: "Myy Love In Devotion", text: "On This Day She Shared Her Pooja Video ", photo: "assets/images/photos/My22.jpeg" },
  { date: "2026-05-01", title: "Myy Lego Joints", text: "On This Day Me Give Her A Small Lego Toy Of A Bird. And Us Joint It Together!! Bestttestt!!! ", photo: "" },
  { date: "2026-05-10", title: "Our Mother's Day.", text: "On This Day She Shared Her Besttestt Pic With Her Muummm!!!", photo: "assets/images/photos/My23.jpeg" },
  { date: "2026-05-20", title: "Our Besttestt Couple Photo Ever.", text: "On This Day We Are At Her Office And In Her Office Camera We Clicked ", photo: "assets/images/photos/My24.jpeg" },
  { date: "2026-05-25", title: "Our Besttestt Tattoo Ever", text: "On This Day She Came To My Home, And She Draw Some Drawings On My Hnads And We Clicked One Pic Of Our Hands ", photo: "assets/images/photos/My25.jpeg" },
  { date: "2026-06-10", title: "My Wallet", text: "On This Day I Make A Small Size Photo Of Her Eye's & My Eye's Which I Put In My Wallet", photo: "assets/images/photos/My26.jpeg" },
  { date: "2026-06-15", title: "Myy Beautyyy Queen", text: "On This Day She Shared Her Most Beautiful Photo In Floral Dress And She Looks So Gorgeous Like Sunflower!!!", photo: "assets/images/photos/My27.jpeg" },
  { date: "2026-06-19", title: "Myy Loveee With Heart", text: "On This Day She Shared Her Photo With A Snap Filter Of Heat And In Middle Of It My Love", photo: "assets/images/photos/My28.jpeg" },
  { date: "2026-06-23", title: "A House Of Fun & Love", text: "On This Day We Are At Her House, And She Was IIn Kitchen And I Came From Behind With A Blinkit Bag And I Placed It On Her Head!!", photo: "assets/images/photos/My29.jpeg" },
  { date: "2026-07-01", title: "A Love Of 52 Cards!!", text: "On This Day I Surprised Her With  A 52 Custom Card Set With Her 52 Photos", photo: "assets/images/photos/My30.jpeg" },
  { date: "2026-07-08", title: "Us With ", text: "On This Day I Surprised Her With A Photo Of Us With 'SAERKAR'AI Generated But It HOLDS Too Much Feelings For Uss", photo: "assets/images/photos/My31.jpeg" },
  { date: "2026-07-16", title: "Bestestt 82 ", text: "On This Day She Shared Her Most videos, On That Day She Shared 82 VIDEOS &I Make Edit Of It And Give Her. ", photo: "assets/images/photos/My32.jpeg" },
  { date: "2026-08-03", title:"A Day With Her In Hospital", text: "On This Day She Was Admitted To The Hospital And I Visited Her, And In Hospital Spend So Much Time Together", photo: "assets/images/photos/My33.jpeg" },
  { date: "2026-08-10", title:"MY CUTIEPIE", text: "On This Day She Was Slightly Tensed Cause Of Hospitalization So I Generated A Photo Of Her Which Is Besstestt AI Generated Pic Of Her", photo: "assets/images/photos/My34.jpeg" },
  { date: "2026-08-18", title:"My LifeLline & Love", text: "On This Day I Created A Beautiful Photo Of Her With My Gannuuu Bappaaa", photo: "assets/images/photos/My36.jpeg" },
  { date: "2026-08-22", title:"UmmHmm", text: "On This Day Us Created A Beautiful Photo Of Us ", photo: "assets/images/photos/My35.jpeg" },
  { date: "2026-08-23", title:"Aagman & US", text: "On This Day My Ganpati's Aagman And She Was Tensed Cause I Came Home Late But Other Side She Was So Happy Cause My Fav Festival & She Was Together With Me And We Are Soo Happyy", photo: "" },
  { date: "2026-08-18", title:"My LifeLline & Love", text: "On This Day I Created A Beautiful Photo Of Her With My Gannuuu Bappaaa", photo: "assets/images/photos/My36.jpeg" },
  { date: "2026-08-27", title:"A Beautiful Memoery Of Her House", text: "On This Day I Visited Her House And We Took Some Beautiful Photos", photo: "assets/images/photos/My37.jpeg" },
  { date: "2026-08-31", title:"My Cryy Babyy", text: "On This Day I'm On Video Call With Her And She Was Crying Cause of Hospitalization And I Make Her Calm!!", photo: "assets/images/photos/My38.jpeg" },
  { date: "2026-09-08", title:"My Cuutuu Cryy Babyy", text: "On This Day She Was Crying And I Tried To Make Her Smile And She BlushedWith Her Pookiee Cheecks", photo: "assets/images/photos/My39.jpeg" },
  { date: "2026-09-14", title:"Bestttt Day Of My Lifeee Cuse I Get Her Forever!!!", text: "On This Day At 12:00 AM She Finally Proposed To Me!!! And Fromm That Day TO Last Breate Of Our Life Wew Decided To Spend Together We Give That Promise To Our Gannuu Bappaaa", photo: "" },
  { date: "2026-09-19", title:"My Magical Eye's", text: "On This Day She Send A Pic Of Her Magical Eye's Litarally Most Purest & Clamestt & Cutest & Lovesstttt", photo: "assets/images/photos/My40.jpeg" },
  { date: "2026-09-24", title:"My Healer!!!", text: "On This Day It's Visarjan Nd I'm Sad Cause Bappaa Was Leaving So I'm Sad But She Expalins Me & Makes Me Smile", photo: "assets/images/photos/My42.jpeg" },
  { date: "2026-10-01", title:"Finally 1st Bestt Meet-up As A Couple!!!", text: "On This Day She Came College After Isolation And We Took Our First Photo As A Couple In Lift Of College", photo: "assets/images/photos/My43.jpeg" },
  { date: "2026-10-14", title:"Our Anniversary", text: "On This Day Congratulations!!!!! Myy Deneb I Lovee You Always. Promise I Never Leave You!!! I'm Always Yours!!! Thatt Day Was Unforgettable For Us, From That Day Onwars To Last Breath I Love Youu & We Are Together!!!! Love Youu My Deneb!!! Gannuu Bappaa Blessed Our Relationship & Protect Us & Stay Happpy Wiith Together", photo: "" },

];
