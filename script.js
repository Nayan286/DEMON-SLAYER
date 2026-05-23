/** lenis setup **/

function lenisSetup() {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
}

/** arrays and objects **/

const missionBoxContentArray = [
  {
    id: 1,
    pagination: "01 / 05",
    title: "FINAL SELECTION",
    subtitle: "MOUNTAIN TRIAL",
    image: "./desktop images/Kimetsu no Yaiba.jpg",
    video: "./videos/demon-slayer-s1e4-16_UOZpr9JK.mp4",
  },
  {
    id: 2,
    pagination: "02 / 05",
    title: "NATAGUMO MOUNTAIN",
    subtitle: "SPIDER FAMILY",
    image: "desktop images/Kimetsu No Yaiba Cómics .jpg",
    video: "./videos/demon-slayer-s1e16-46_OxQoV0lp.mp4",
  },
  {
    id: 3,
    pagination: "03 / 05",
    title: "MUGEN TRAIN",
    subtitle: "FLAME HASHIRA",
    image: "./desktop images/Moonlit train through a mystical forest .png",
    video: "./videos/demon-slayer-s2e7-1-lkqnqgx5_5T85SiFy.mp4",
  },
  {
    id: 4,
    pagination: "04 / 05",
    title: "ENTERTAINMENT DISTRICT",
    subtitle: "SOUND HASHIRA",
    image: "desktop images/Vibrant night in a bustling district.png",
    video: "./videos/demon-slayer-s2e17-94-ebmxlm05_R4tBEXPv.mp4",
  },
  {
    id: 5,
    pagination: "05 / 05",
    title: "SWORDSMITH VILLAGE",
    subtitle: "MIST HASHIRA",
    image: "./desktop images/Vila dos Ferreiros.jpg",
    video: "./videos/demon-slayer-s3e05-66-0wy764ad_2yG3s1Nx.mp4",
  },
];

const oldHashiraArray = [
  {
    name: "Yoriichi Tsugikuni",
    image: "./desktop images/Yoriichi Tsugikuni in fiery glow.png",
  },
  {
    name: "Takeshi Hayate",
    image: "./desktop images/wind hahsira old.png",
  },
  {
    name: "Yusuke Mizuhara",
    image: "./desktop images/Water Hashira in focused grace.png",
  },
  {
    name: "Kazuyoshi Iwamoto",
    image: "./desktop images/Stone Hashira in side profile.png",
  },
  {
    name: "Enjuro Rengoku",
    image: "./desktop images/Rengoku's fiery resolve.png",
  },
];

const battleHeadings = [
  {
    title: "THREADFALL / HUNT",
    vs: "Tanjiro vs Rui",
    image: "fight battles images/tanjiro vs rui.jpg",
  },
  {
    title: "MOONFALL / INFERNO",
    vs: "Kyojuro vs Akaza",
    image: "fight battles images/rengoku vs akaza.jpg",
  },
  {
    title: "RAGEWIND / SHATTER",
    vs: "Tengen and Tanjiro vs Gyutaro & Daki",
    image: "fight battles images/tengen vs Gyutaro.jpg",
  },
  {
    title: "MISTBREAK / FURY",
    vs: "Muichiro vs Gyokko",
    image: "fight battles images/muichiro vs gyukko.png",
  },
  {
    title: "BLOSSOMFALL / TERROR",
    vs: "Mitsuri and Tanjiro vs Hantengu",
    image: "fight battles images/tanjiro and mitsuri vs hantengu.jpg",
  },
  {
    title: "VENOMCROWN / DOOM",
    vs: "Shinobu vs Doma",
    image: "fight battles images/shinobu vs doma.jpg",
  },
  {
    title: "SERPENTBLOOM / NIGHT",
    vs: "Obanai and Mitsuri vs Nakime",
    image: "fight battles images/mitsuri and obanai vs nakime.jpg",
  },
  {
    title: "CELESTIAL RUIN / LAST STAND",
    vs: "Kokushibo vs Hashira",
    image: "fight battles images/kokoshibo vs hashira.png",
  },
  {
    title: "WORLD END / DEMON DAWN",
    vs: "Muzan vs Demon Slayers",
    image: "fight battles images/muzan vs demon slayers.png",
  },
  {
    title: "THUNDERBLADE / FOREST",
    vs: "Zenitsu vs Kaigaku",
    image: "fight battles images/zenitsu vs kaigaku.jpg",
  },
  {
    title: "BEASTFANG / SWAMP",
    vs: "Inosuke vs Doma",
    image: "fight battles images/inosuke vs doma.png",
  },
  {
    title: "SUNRISE BLADE / ORIGIN",
    vs: "Muzan vs Yoriichi",
    image: "fight battles images/muzan vs yorichi.png",
  },
];

const charactersCardArray = [
  {
    name: "Akaza",
    voice: "voices/akaza-badass.mp3",
    image: "mobile images/download (24).jpg",
  },
  {
    name: "Daki",
    voice: "voices/daki-voice-3.mp3",
    image: "mobile images/Daki.jpg",
  },
  {
    name: "Doma",
    voice: "voices/doma voice.mp3",
    image: "mobile images/― 𝑫𝑶𝑼𝑴𝑨ᥫᩣ.jpg",
  },
  {
    name: "Gyomei",
    voice: "voices/gyomei-voice2.mp3",
    image: "mobile images/download (25).jpg",
  },
  {
    name: "Inosuke",
    voice: "voices/inosuke voice.mp3",
    image: "mobile images/download (26).jpg",
  },
  {
    name: "Mitsuri",
    voice: "voices/mitsuri-voice1.mp3",
    image: "mobile images/download (27).jpg",
  },
  {
    name: "Muichiro",
    voice: "voices/muichiro-voice1.mp3",
    image: "mobile images/Muichiro Tokito.jpg",
  },
  {
    name: "Muzan",
    voice: "voices/muzan-voice1.mp3",
    image: "mobile images/muzan image.jpg",
  },
  {
    name: "Giyu",
    voice: "voices/giyu voice.mp3",
    image: "mobile images/download (28).jpg",
  },
  {
    name: "Nezuko",
    voice: "voices/nezuko-laugh.mp3",
    image: "mobile images/NEZUKO KAMADO.jpg",
  },
  {
    name: "Obanai",
    voice: "voices/obanai-voice7.mp3",
    image: "mobile images/iguro obanai.jpg",
  },
  {
    name: "Kyojuro",
    voice: "voices/rengoku.mp3",
    image: "mobile images/download (29).jpg",
  },
  {
    name: "Sanemi",
    voice: "voices/sanemi-voice1.mp3",
    image: "mobile images/Sanemi Shinazugawa _ Wind Hashira _.jpg",
  },
  {
    name: "Shinobu",
    voice: "voices/shinobu voice.mp3",
    image: "mobile images/ヾ(≧▽≦_)oKocho Shinobu.jpg",
  },
  {
    name: "Tanjiro",
    voice: "voices/tanjiro voice.mp3",
    image:
      "mobile images/Tanjiro Fire and Water Breathing Wallpaper 🔥💧 Demon Slayer 4K.jpg",
  },
  {
    name: "Tengen",
    voice: "voices/tengen voice.mp3",
    image: "mobile images/download (30).jpg",
  },
  {
    name: "Zenitsu",
    voice: "voices/zenitsu voice.mp3",
    image: "mobile images/download (31).jpg",
  },
];

const socialLinksArray = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/nayanthakare31/#",
  },
  {
    name: "GitHub",
    url: "https://github.com/Nayan286",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nayan-thakare-b8450b335/",
  },
];

const pageTransitionLinksArray = [
  "home.html",
  "corps.html",
  "combat.html",
  "cards.html",
];

const demonSlayerPlacesArray = [
  "desktop images/doma mansion.png",
  "desktop images/butterfly mansion.jpg",
  "desktop images/Infinity castle desktop wallpaper.jpg",
  "desktop images/mount sagiri.jpg",
  "desktop images/ubuyashiki mansion.jpg",
  "desktop images/Asakusa.jpg",
];

const characterJourneyDataArray = [
  {
    name: "Akaza",
    japaneseName: "猗窩座",
    theme: "#4FC3F7",

    firstLife: "Human",
    firstJourney:
      "Born as Hakuji, he lived a harsh life caring for his sick father. Poverty shaped his early years deeply. Under Keizo, he found discipline through martial arts. With Koyuki, he experienced love and peace for the first time. That happiness gave his life meaning before it was taken away. He finally felt hope after years of suffering. His world briefly became warm and human.",

    secondLife: "Demon",
    secondJourney:
      "After losing everything, he was consumed by rage and despair. He accepted becoming a demon to escape his pain. As Akaza, he believed only the strong deserved to live. He constantly sought powerful opponents to validate his belief. Strength became his only identity and purpose. He erased his human memories to survive emotionally. His existence turned into endless pursuit of power.",

    thirdLife: "The End",
    thirdJourney:
      "During his final battle, his lost memories begin to return. He recalls the love and peace he once had. The pain he suppressed resurfaces all at once. For the first time, he stops resisting. Letting go, he finally finds peace in death. He understands what he lost too late. His final moment is filled with regret and release.",

    imageFirstLife: "character images/akaza/akaza as human.jpg",
    imageSecondLife: "character images/akaza/akaza as demon.jpg",
    imageThirdLife: "character images/akaza/akaza the end.jpg",
  },

  {
    name: "Daki",
    japaneseName: "堕姫",
    theme: "#D96BB3",
    firstLife: "Human",
    firstJourney:
      "Born into extreme poverty, Ume suffered a painful childhood. She lived in the red-light district surrounded by cruelty. Her brother was her only support in life. She endured abuse and humiliation daily. Despite everything, she held onto her brother. Her tragic life eventually led to her death. She learned early that survival meant enduring pain.",
    secondLife: "Demon",
    secondJourney:
      "As a demon, she embraced beauty and arrogance. She believed herself superior to humans. Her strength came alongside her brother Gyutaro. She relied heavily on him while hiding her fears. Her cruel nature masked her inner weakness. Power became her way to avoid vulnerability. Beneath her pride was a fragile self.",
    thirdLife: "The End",
    thirdJourney:
      "After defeat, her pride collapses instantly. She becomes fearful and desperate. Her true self is revealed as she cries for her brother. She cannot face death alone. In the end, she chooses to stay with him. Their bond remains her only comfort. She refuses to be separated even in death.",
    imageFirstLife: "character images/daki/daki as human.jpg",
    imageSecondLife: "character images/daki/daki as demon.jpg",
    imageThirdLife: "character images/daki/daki the end.jpg",
  },
  {
    name: "Doma",
    japaneseName: "童磨",
    theme: "#CFEFFF",
    firstLife: "Human",
    firstJourney:
      "Raised as a divine figure, he was worshipped from childhood. People looked up to him for guidance and hope. Despite this, he never felt real emotions. He listened to others but never understood their pain. His life lacked genuine connection or empathy. This emptiness defined who he was. He observed emotions without experiencing them. His existence felt hollow despite admiration. He remained detached from humanity.",
    secondLife: "Demon",
    secondJourney:
      "As a demon, he maintained his detached personality. He killed without guilt or hesitation. He believed he was saving people from suffering. His calm demeanor made him even more terrifying. He never experienced remorse or sadness. His existence remained hollow and emotionless. His actions lacked purpose beyond habit. He never questioned his morality. His emptiness only deepened over time.",
    thirdLife: "The End",
    thirdJourney:
      "Even in death, he fails to understand emotions. He reflects on love but cannot truly feel it. His end is quiet and empty. There is no regret or redemption. He fades away without change. His story ends as it began—void of meaning. He never grasps human connection. His existence leaves no emotional trace. His end reflects his emptiness.",
    imageFirstLife: "character images/doma/doma as human.jpg",
    imageSecondLife: "character images/doma/doma as demon.jpg",
    imageThirdLife: "character images/doma/doma the end.png",
  },

  {
    name: "Gyomei",
    japaneseName: "悲鳴嶼行冥",
    theme: "#8A6F4D",
    firstLife: "Human",
    firstJourney:
      "Gyomei lived as a gentle monk caring for orphaned children. Despite his blindness, he protected them with dedication. His life was simple but meaningful. He believed strongly in faith and compassion. A tragic incident changed everything. It pushed him toward a new path. His trust in people was deeply tested. He endured pain with silent strength. His faith became his foundation.",
    secondLife: "Hashira",
    secondJourney:
      "He became the strongest Hashira through discipline and faith. His strength was unmatched among demon slayers. He fought with calmness and conviction. His beliefs guided his every action. He carried the responsibility of protecting others. His presence inspired trust and respect. He never doubted his purpose. His resolve remained unshaken. His strength came from inner peace.",
    thirdLife: "The End",
    thirdJourney:
      "In his final moments, he reflects on his life choices. He believes he fulfilled his duty. His faith never wavers until the end. He accepts death peacefully. He feels he protected those who mattered. He passes away with a sense of completion. There is no fear in his heart. His life feels whole and meaningful. He embraces the end with calm acceptance.",
    imageFirstLife: "character images/gyomei/gyomei as human.jpg",
    imageSecondLife: "character images/gyomei/gyomei as hashira.jpg",
    imageThirdLife: "character images/gyomei/gyomei the end.png",
  },

  {
    name: "Inosuke",
    japaneseName: "嘴平伊之助",
    theme: "#6b99b2",
    firstLife: "Human",
    firstJourney:
      "Abandoned as a child, he was raised by wild boars. He grew up isolated from human society. Survival shaped his instincts and behavior. He became aggressive and prideful. He never learned normal human emotions. His world was based on strength and dominance. He trusted no one and relied only on himself. His identity formed around survival. He lacked any sense of belonging.",
    secondLife: "Demon Slayer",
    secondJourney:
      "As a demon slayer, he fought with wild and unpredictable techniques. He valued strength above everything. Over time, he formed bonds with others. These connections slowly changed him. He began understanding emotions like friendship. His growth was subtle but meaningful. He started valuing others beyond strength. His instincts slowly balanced with emotion. His personality began evolving.",
    thirdLife: "The End",
    thirdJourney:
      "Through his journey, he matures emotionally. He learns to value people over pride. His friendships shape his identity. He becomes more human with time. Strength is no longer his only focus. He grows into someone who truly belongs. He finds meaning in connection. His loneliness fades gradually. He accepts others as part of his life.",
    imageFirstLife: "character images/inosuke/inosuke as human.jpg",
    imageSecondLife: "character images/inosuke/inosuke as hashira.jpg",
    imageThirdLife: "character images/inosuke/inosuke the end.png",
  },

  {
    name: "Mitsuri",
    japaneseName: "甘露寺蜜璃",
    theme: "#FF8FCF",
    firstLife: "Human",
    firstJourney:
      "Mitsuri struggled with her identity due to her unusual strength. She felt different from others around her. Society failed to accept her true self. She longed for love and belonging. Her emotional nature made her vulnerable. She searched for a place to fit in. She questioned her own worth constantly. Her uniqueness felt like a burden. She desired acceptance above all.",
    secondLife: "Hashira",
    secondJourney:
      "She found acceptance in the Demon Slayer Corps. Her strength became her greatest asset. She fought with grace and passion. Her emotions fueled her fighting style. She formed meaningful connections with others. She finally felt she belonged somewhere. Her confidence began to grow. She embraced her true self fully. Her heart guided her actions.",
    thirdLife: "The End",
    thirdJourney:
      "In her final battle, she fights with everything she has. Her love for others drives her forward. She stays true to herself until the end. She expresses her feelings openly. She dies without regret. She finds peace in love. She accepts her life fully. Her heart remains unchanged. Her end is filled with warmth.",
    imageFirstLife: "character images/mitsuri/mitsuri as human.jpg",
    imageSecondLife: "character images/mitsuri/mitsuri as hashira.jpg",
    imageThirdLife: "character images/mitsuri/mitsuri the end.jpg",
  },

  {
    name: "Muichiro",
    japaneseName: "時透無一郎",
    theme: "#53d8cf",
    firstLife: "Human",
    firstJourney:
      "After a tragic event, he lost his memories. His personality became cold and distant. He forgot his past and emotions. His life felt empty and directionless. Despite this, he possessed immense talent. His identity remained incomplete. He struggled to understand himself. His past felt unreachable. He existed without purpose.",
    secondLife: "Hashira",
    secondJourney:
      "As a Hashira, he showed exceptional skill in battle. He fought without emotional attachment. His focus was purely on strength. Over time, fragments of his past returned. His personality began to change. He started rediscovering himself. His emotions slowly resurfaced. He questioned his identity again. His growth became visible.",
    thirdLife: "The End",
    thirdJourney:
      "In his final moments, his memories fully return. He understands who he truly is. His emotions resurface completely. He accepts his past and identity. He dies with clarity and peace. His journey ends with self-realization. He finds meaning in his life. His confusion disappears. He reaches emotional closure.",
    imageFirstLife: "character images/muichiro/muichiro as human.jpg",
    imageSecondLife: "character images/muichiro/muichiro as hashira.jpg",
    imageThirdLife: "character images/muichiro/muichiro the end.png",
  },
  {
    name: "Muzan",
    japaneseName: "鬼舞辻無惨",
    theme: "#d54444",

    firstLife: "Human",
    firstJourney:
      "Born as a frail human, Muzan lived in constant fear of death. His body was weak and unreliable. He desperately wanted to survive at any cost. A doctor’s experimental treatment changed his fate. It gave him immense power but took away his humanity. Instead of gratitude, he chose control and dominance. His fear of death turned into obsession with perfection. He rejected weakness completely. His humanity faded as his ego grew.",

    secondLife: "Demon King",
    secondJourney:
      "As the first demon, Muzan gained unmatched power and control. He created other demons to serve his will. He ruled through fear and absolute authority. Any form of weakness disgusted him. He constantly searched for true immortality. His paranoia made him eliminate even loyal followers. He feared death more than anything else. His existence became hollow despite his power. He trusted no one and lived in isolation.",

    thirdLife: "The End",
    thirdJourney:
      "In his final moments, Muzan desperately tries to survive. He refuses to accept defeat until the very end. Even when cornered, his fear drives him forward. The combined efforts of the Demon Slayers bring him down. His body weakens under the rising sun. He clings to life but ultimately fails. His dream of immortality collapses completely. He dies alone, consumed by his own fear. His end reflects the emptiness of his existence.",

    imageFirstLife: "character images/muzan/muzan as human.png",
    imageSecondLife: "character images/muzan/muzan as demon.jpg",
    imageThirdLife: "character images/muzan/muzan the end.png",
  },

  {
    name: "Giyu",
    japaneseName: "冨岡義勇",
    theme: "#5993d5",

    firstLife: "Human",
    firstJourney:
      "Giyu lived a tragic childhood filled with loss. His sister sacrificed herself to save him. That moment left a deep scar on him. He struggled with guilt and self-worth. Under Urokodaki, he trained to become stronger. He formed a bond with Sabito during training. Sabito’s death impacted him deeply. He felt he did not deserve to live. His quiet nature grew from this pain.",

    secondLife: "Hashira",
    secondJourney:
      "As the Water Hashira, Giyu becomes calm and reserved. He rarely expresses his emotions openly. He carries guilt from his past silently. Despite this, he protects others without hesitation. He plays a key role in guiding Tanjiro. His actions reflect quiet strength and responsibility. He often distances himself from others. His sense of duty defines his life.",

    thirdLife: "The End",
    thirdJourney:
      "In the final battle, Giyu faces immense challenges. He continues fighting despite injuries and exhaustion. His resolve remains unshaken till the end. He finally begins to accept himself. The burden of his past starts to lift. He survives and carries forward the legacy. His journey ends with quiet growth. He learns to live without constant guilt. His strength becomes more than just survival.",

    imageFirstLife: "character images/giyu/giyu as child.jpg",
    imageSecondLife: "character images/giyu/giyu as hashira.jpg",
    imageThirdLife: "character images/giyu/giyu the end.png",
  },

  {
    name: "Nezuko",
    japaneseName: "竈門禰豆子",
    theme: "#FF8FA3",
    firstLife: "Human",
    firstJourney:
      "Nezuko lived a peaceful life with her family. She was kind, caring, and deeply connected to her loved ones. Her warmth brought comfort to those around her. She valued family above everything else. Her life was simple yet full of happiness. That peace was suddenly taken away. She cherished every small moment with her family. Her innocence defined her personality. She lived with pure love and joy.",
    secondLife: "Demon",
    secondJourney:
      "Turned into a demon, she struggles against her instincts. Despite this, she protects humans instead of harming them. Her bond with her brother keeps her grounded. She fights fiercely when needed. Her strength grows alongside her willpower. She becomes a symbol of hope. She resists her inner darkness constantly. Her love overpowers her instincts. She proves demons can choose differently.",
    thirdLife: "The End",
    thirdJourney:
      "Eventually, she regains her humanity. Her journey proves that demons can resist darkness. She returns to the life she once lost. Her bond with her brother remains strong. She represents love overcoming evil. Her story ends with hope and healing. She finds peace in normal life again. Her struggles shape her strength. Her ending reflects warmth and renewal.",
    imageFirstLife: "character images/nezuko/nezuko as child.jpg",
    imageSecondLife: "character images/nezuko/nezuko as demon.jpg",
    imageThirdLife: "character images/nezuko/nezuko the end.jpg",
  },

  {
    name: "Obanai",
    japaneseName: "伊黒小芭内",
    theme: "#7768bf",
    firstLife: "Human",
    firstJourney:
      "Obanai was born into a cruel and oppressive family. His childhood was filled with fear and suffering. He lived under strict control and isolation. His life felt like a prison from the start. He carried deep emotional scars. These experiences shaped his personality. He grew up distrusting the world. Pain became part of his identity. He learned to suppress his emotions.",
    secondLife: "Hashira",
    secondJourney:
      "As a Hashira, he became strict and disciplined. He followed rules without compromise. His harsh attitude hid his emotional side. He deeply cared for Mitsuri but struggled to express it. His sense of duty defined his actions. He carried his past silently. His love remained hidden behind discipline. He feared vulnerability. His actions spoke more than words.",
    thirdLife: "The End",
    thirdJourney:
      "In his final moments, he reveals his true feelings. He fights to protect the one he loves. His emotional walls finally break. He expresses his love openly. He dies with honesty and vulnerability. His journey ends with emotional freedom. He accepts himself fully. His regrets fade away. His love defines his ending.",
    imageFirstLife: "character images/obanai/obanai as human.png",
    imageSecondLife: "character images/obanai/obanai as hashira.jpg",
    imageThirdLife: "character images/obanai/obanai the end.jpg",
  },

  {
    name: "Kyojuro",
    japaneseName: "煉獄杏寿郎",
    theme: "#FF8C00",
    firstLife: "Human",
    firstJourney:
      "Kyojuro was raised with strong moral values. His mother taught him to protect the weak. Even after her death, her words guided him. He trained tirelessly to grow stronger. His spirit remained bright and unwavering. He chose a path of duty and honor. He believed strength should serve others. His determination never faded. His purpose was clear from the start.",
    secondLife: "Hashira",
    secondJourney:
      "As the Flame Hashira, he became a symbol of strength. His passion inspired everyone around him. He fought with determination and courage. He never hesitated to risk his life. His presence brought hope to others. He embodied true leadership. His energy uplifted those around him. He led by example always. His spirit never wavered.",
    thirdLife: "The End",
    thirdJourney:
      "In his final battle, he faces overwhelming odds. Even while injured, he continues fighting. He protects others until his last breath. He accepts death with a smile. His final words inspire the next generation. His legacy lives on. His courage leaves a lasting mark. He dies without regret. His spirit continues through others.",
    imageFirstLife: "character images/rengoku/rengoku as human.jpg",
    imageSecondLife: "character images/rengoku/rengoku as hashira.jpg",
    imageThirdLife: "character images/rengoku/rengoku the end.jpg",
  },

  {
    name: "Sanemi",
    japaneseName: "不死川実弥",
    theme: "#46af85",
    firstLife: "Human",
    firstJourney:
      "Sanemi experienced a childhood filled with violence and loss. His family tragedy left deep scars. He developed anger as a defense mechanism. He pushed others away to protect himself. His emotions became hard to control. Pain shaped his personality. He struggled with trust deeply. His anger hid his vulnerability. He lived with unresolved trauma.",
    secondLife: "Hashira",
    secondJourney:
      "As the Wind Hashira, he became fierce and aggressive. He fought demons with intense hatred. His harsh behavior masked his care for others. He believed strength meant suppressing emotions. His past continued to influence him. He carried unresolved pain. He distanced himself from others. His anger became his shield. He feared emotional weakness.",
    thirdLife: "The End",
    thirdJourney:
      "Over time, he begins to confront his past. He slowly reconnects with his emotions. His relationships help him heal. He understands the value of compassion. His anger softens gradually. His journey leads toward emotional closure. He accepts his pain fully. He allows himself to feel again. His healing defines his ending.",
    imageFirstLife: "character images/sanemi/sanemi as child.jpg",
    imageSecondLife: "character images/sanemi/sanemi as hashira.jpg",
    imageThirdLife: "character images/sanemi/sanemi the end.jpg",
  },

  {
    name: "Shinobu",
    japaneseName: "胡蝶しのぶ",
    theme: "#805da9",
    firstLife: "Human",
    firstJourney:
      "Shinobu grew up kind and compassionate. She shared a deep bond with her sister. Her life was filled with warmth and care. After losing her sister, everything changed. She hid her pain behind a calm smile. Her emotions became controlled and hidden. She learned to mask her feelings. Her kindness remained despite pain. Her strength came from within.",
    secondLife: "Hashira",
    secondJourney:
      "As a Hashira, she used intelligence instead of brute strength. She mastered poison techniques to fight demons. Her calm demeanor hid her anger. She dedicated her life to revenge and justice. Her methods were precise and calculated. She remained composed in every situation. She never showed her true pain. Her mind became her greatest weapon. She controlled every emotion carefully.",
    thirdLife: "The End",
    thirdJourney:
      "In her final act, she sacrifices herself for victory. Her plan ensures the defeat of a powerful demon. She fulfills her purpose completely. Her hidden emotions finally find release. She reunites with her sister in peace. Her journey ends with fulfillment. Her sacrifice carries meaning. Her pain transforms into peace. She finds emotional closure.",
    imageFirstLife: "character images/shinobu/shinobu as child.jpg",
    imageSecondLife: "character images/shinobu/shinobu as hashira.jpg",
    imageThirdLife: "character images/shinobu/shinobu the end.jpg",
  },

  {
    name: "Tanjiro",
    japaneseName: "竈門炭治郎",
    theme: "#5689d1",
    firstLife: "Human",
    firstJourney:
      "Tanjiro lived a peaceful life with his family. He was kind, hardworking, and responsible. He deeply cared for his loved ones. His life was simple but meaningful. Everything changed after a tragic attack. He lost everything in one night. His kindness remained even in pain. He chose strength over despair. His journey began with loss.",
    secondLife: "Demon Slayer",
    secondJourney:
      "He became a demon slayer to protect his sister. His compassion set him apart from others. He showed empathy even toward enemies. He trained hard to become stronger. His determination never wavered. His journey was driven by love and hope. He inspired others through kindness. His strength came from his heart. He never lost his humanity.",
    thirdLife: "The End",
    thirdJourney:
      "Through countless battles, he grows stronger emotionally and physically. He never loses his kindness. He inspires those around him. His bond with his sister remains unbreakable. He continues to fight for a better future. His journey represents resilience and compassion. He carries hope forward. His presence changes others. His story reflects pure humanity.",
    imageFirstLife: "character images/tanjiro/tanjiro as child.jpg",
    imageSecondLife: "character images/tanjiro/tanjiro as hashira.jpg",
    imageThirdLife: "character images/tanjiro/tanjiro the end.jpg",
  },

  {
    name: "Tengen",
    japaneseName: "宇髄天元",
    theme: "#9b6ac8",
    firstLife: "Human",
    firstJourney:
      "Tengen was raised in a strict shinobi clan. His childhood was filled with harsh training and survival. He was taught to prioritize missions over emotions. This lifestyle felt empty to him. He desired a different life. He chose to break away from his past. He rejected emotionless living. He wanted meaning beyond duty. His decision shaped his future.",
    secondLife: "Hashira",
    secondJourney:
      "As a Hashira, he embraced a flamboyant personality. He valued life over blind duty. He fought with confidence and style. His bond with his wives defined his actions. He prioritized protecting those he loved. His strength was balanced with compassion. He lived life boldly. He valued individuality. His choices reflected freedom.",
    thirdLife: "The End",
    thirdJourney:
      "After intense battles, he chooses to step away from fighting. He values life and survival over sacrifice. He lives on to protect his loved ones. His perspective shifts toward peace. He embraces a quieter life. His journey ends with fulfillment. He finds balance in life. He accepts a new path. His ending reflects contentment.",
    imageFirstLife: "character images/tengen/tengen as child.jpg",
    imageSecondLife: "character images/tengen/tengen as hashira.jpg",
    imageThirdLife: "character images/tengen/tengen the end.jpg",
  },

  {
    name: "Zenitsu",
    japaneseName: "我妻善逸",
    theme: "#FFF176",
    firstLife: "Human",
    firstJourney:
      "Zenitsu grew up lacking confidence and self-belief. He was constantly afraid of everything. His life felt overwhelming and uncertain. He doubted his own abilities. Despite this, he had hidden potential. Fear defined his personality. He struggled to trust himself. His anxiety shaped his actions. He avoided challenges whenever possible.",
    secondLife: "Demon Slayer",
    secondJourney:
      "As a demon slayer, he fought only when unconscious at first. His true strength emerged in those moments. Over time, he began to grow more confident. He trained hard to overcome his fear. His determination slowly increased. He started believing in himself. He faced situations he once avoided. His courage developed gradually. His growth became visible.",
    thirdLife: "The End",
    thirdJourney:
      "Eventually, he learns to fight consciously. He faces his fears head-on. His courage grows stronger with each battle. He protects those he cares about. He becomes more reliable and brave. His journey transforms fear into strength. He gains true confidence. His fear no longer controls him. His ending reflects growth and bravery.",
    imageFirstLife: "character images/zenitsu/zenitsu as child.jpg",
    imageSecondLife: "character images/zenitsu/zenitsu as hashira.jpg",
    imageThirdLife: "character images/zenitsu/zenitsu the end.jpg",
  },
];

const demonSlayerSymbols = ["火", "水", "花", "日", "月", "血"];

/** global variables **/

const battleShowcaseSection = document.querySelector(".battle-showcases");
const JourneyGridSection1 = document.querySelector(
  ".journey-showcase-section .journey-showcase .journey1",
);
const JourneyGridSection2 = document.querySelector(
  ".journey-showcase-section .journey-showcase .journey2",
);
const JourneyGridSection3 = document.querySelector(
  ".journey-showcase-section .journey-showcase .journey3",
);
const pageTransitionGridSection = document.querySelector(
  ".page-transition-grid .transition-grid-content",
);
const homeLoader = document.querySelector(".home-loader");
const navbars = document.querySelector(".navbar");
const otherLoader = document.querySelector(".other-loader");
let isMenuButtonClicked = false;
let main = document.querySelectorAll(".main");
let missionBoxdelayTime = 0.8;
let isAnyMissionBoxVideoPlayed = false;
let isDataStoreLocally = false;
let isNavbarOpen = false;
let journeyPageData = {
  characterIndex: 0,
};
let lastWidth = window.innerWidth;
let resizeTimeout;
let isTransitionGridSectionHalfAnimate = false;
let PageIndex = null;
let isPageLoad = false;

/** main functions **/

function storingDataLocally() {
  let storageObject = JSON.stringify(journeyPageData);
  localStorage.setItem("selectedCardIndex", storageObject);
  if (!localStorage.getItem("selectedCardIndex")) return;
  isDataStoreLocally = true;
}

function stoppingInspection() {
  document.addEventListener(
    "contextmenu",
    function (dets) {
      dets.preventDefault();
    },
    false,
  );
}

function splitLines() {
  let paras = document.querySelectorAll(".para-container");
  if (paras.length === 0) return;
  paras.forEach((para, index) => {
    let paraSpans = [];
    let paraTextContent = para.textContent;
    let paraTextSplits = null;
    if (para.classList.contains("comma-split-also")) {
      paraTextSplits = paraTextContent.trim().split(/[.,]/);
    } else {
      paraTextSplits = paraTextContent.trim().split(/[.!]/);
    }
    if (paraTextSplits === null) return;
    paraTextSplits.forEach((textSplit) => {
      let span = document.createElement("span");
      span.textContent = textSplit;
      span.style.display = "inline-block";
      paraSpans.push(span);
    });
    if (paraSpans.length === 0) return;
    para.innerHTML = "";
    paraSpans.forEach((p) => {
      let paragraph = document.createElement("p");
      paragraph.appendChild(p);
      para.appendChild(paragraph);
    });
  });
}

function gridBoxDisplay() {
  let main = document.querySelector(".main");
  let gridBoxSection = document.querySelector(".grid-box-section");
  let gridSectionHeight = Math.floor(main.getBoundingClientRect().height);
  let gridSectionWidth = Math.floor(window.innerWidth);
  let gridBoxesHeight = 50;
  let gridBoxesWidth = 50;
  let NumberOfRow = Math.floor(gridSectionHeight / gridBoxesHeight);
  let NumberOfColumn = Math.floor(gridSectionWidth / gridBoxesWidth);
  let gridBoxesArray = [];
  if (!gridBoxSection) return;
  gridBoxSection.style.height = gridSectionHeight + "px";
  gridBoxSection.style.width = gridSectionWidth + "px";

  for (let i = 0; i < NumberOfRow * NumberOfColumn; i++) {
    let box = document.createElement("div");
    box.classList.add("grid-box");
    box.style.height = gridBoxesHeight + "px";
    box.style.width = gridBoxesWidth + "px";
    gridBoxSection.appendChild(box);
    gridBoxesArray.push(box);
  }

  if (window.innerWidth > 600) {
    if (gridBoxesArray.length === 0) return;
    document.addEventListener("mousemove", function (e) {
      handleGridHover(e.clientX, e.clientY);
    });

    let lastIndex = -1;
    function handleGridHover(x, y) {
      let col = Math.floor(x / gridBoxesWidth);
      let row = Math.floor(y / gridBoxesHeight);
      let index = row * NumberOfColumn + col;

      if (index === lastIndex) return;
      lastIndex = index;

      let box = gridBoxesArray[index];
      if (!box) return;

      box.style.borderColor = "#ee6335";

      setTimeout(() => {
        box.style.borderColor = "#262626";
      }, 500);
    }
  }
}

function socialButtonInfoDisplay() {
  let socialLinkBlock = document.querySelectorAll(
    ".footer-content .footer-top .social-block .social-links",
  );

  if (socialLinkBlock.length === 0) return;
  socialLinkBlock.forEach((block) => {
    let socialLinks = block.querySelectorAll("h3 span");
    if (socialLinks.length === 0) return;
    socialLinks.forEach((link, index) => {
      link.textContent = socialLinksArray[index].name;
      link.addEventListener("click", function () {
        window.open(socialLinksArray[index].url, "_blank");
      });
    });
  });
}

function PageTransitionButton() {
  if (navbars.length === 0) return;
  let navButtons = navbars.querySelectorAll("li a");

  /** mobile view navbar **/

  let navMenuButton = navbars.querySelector(".menu");
  let navbarHeight = navbars.getBoundingClientRect().height;
  let navLinkSection = navbars.querySelector(".nav-social-links");
  let navLinkSectionHeight = navLinkSection.getBoundingClientRect().height;

  if (window.innerWidth <= 600) {
    navMenuButton.addEventListener("click", function () {
      if (!isMenuButtonClicked) {
        lockScroll();
        isNavbarOpen = true;
        isMenuButtonClicked = true;
        navbars.style.borderBottomLeftRadius = 0;
        navbars.style.borderBottomRightRadius = 0;
        gsap.to(navLinkSection, {
          height: "150px",
          duration: 0.2,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.to(navbars.querySelector(".links"), {
              opacity: 1,
              pointerEvents: "auto",
              duration: 0.2,
              ease: "power2.inOut",
            });
          },
        });
      } else {
        unlockScroll();
        navbars.style.borderBottomLeftRadius = "6px";
        navbars.style.borderBottomRightRadius = "6px";
        gsap.to(navbars.querySelector(".links"), {
          opacity: 0,
          duration: 0.2,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.to(navLinkSection, {
              height: 0,
              duration: 0.2,
              ease: "power2.inOut",
            });
          },
        });
        isMenuButtonClicked = false;
      }
    });
  }

  navButtons.forEach((button, index) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      if (isNavbarOpen) {
        navbars.style.borderBottomLeftRadius = "6px";
        navbars.style.borderBottomRightRadius = "6px";
        gsap.to(navbars.querySelector(".links"), {
          opacity: 0,
          duration: 0.2,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.to(navLinkSection, {
              height: 0,
              duration: 0.2,
              ease: "power2.inOut",
            });
          },
        });
        isMenuButtonClicked = false;
        isNavbarOpen = false;
      }
      if (isNavbarOpen) return;
      PageIndex = index;
      lockScroll();
      pageTransitionGrid();
    });
  });
}

function missionContentDisplay() {
  let missionBoxes = document.querySelectorAll(
    ".missions-section .missions-display .mission .mission-box",
  );

  if (missionBoxes.length === 0) return;
  missionBoxes.forEach((missionBox, index) => {
    let missionNumber = missionBox.querySelector(".mission-number span");
    let missionName = missionBox.querySelector(".mission-name");
    let missionImage = missionBox.querySelector(".mission-img img");
    let missionVideo = missionBox.querySelector(".mission-look video");
    let missionTag = missionBox.querySelector(".mission-tag span");

    if (missionBoxContentArray.length === 0) return;
    missionNumber.textContent = missionBoxContentArray[index].pagination;
    missionName.textContent = missionBoxContentArray[index].title;
    missionTag.textContent = missionBoxContentArray[index].subtitle;
    missionImage.src = missionBoxContentArray[index].image;
    missionVideo.src = missionBoxContentArray[index].video;
  });
}

function sectionHeightAssign() {
  let sections = document.querySelectorAll("section-height");

  if (sections.length === 0) return;
  sections.forEach((section) => {
    let sectionHeight = Number(section.getBoundingClientRect().height);
    section.style.height = sectionHeight + "px";
  });
}

if (window.innerWidth > 600) {
  document.querySelectorAll(".para-container h4").forEach((h4) => {
    if (!h4) return;
    h4.innerHTML = "";
  });
}

function circleCardMotion() {
  let circleCard = document.querySelector(
    ".old-hashira-showdown .old-hashira-card .rotate-circle-card",
  );
  let hashiraCards = document.querySelectorAll(".hashira-card");
  if (hashiraCards.length === 0) return;
  hashiraCards.forEach((card, index) => {
    if (!card) return;
    let cardImage = card.querySelector("img");
    let cardText = card.querySelector("h3");
    let rotateValue = index * 45;

    card.style.transform = `translate(-50%,-50%) rotate(${rotateValue}deg)`;

    if (!cardImage || !cardText) return;
    cardImage.src = oldHashiraArray[index].image;
    cardText.textContent = oldHashiraArray[index].name;
  });
}

function combatShowcases() {
  let battleImageShowcase = document.querySelector(".battle-image-showcase");
  let battleImage = document.querySelector(".battle-image-showcase img");

  /** Battle Text Feature **/

  if (!battleShowcaseSection) return;
  let battle = "";
  let battleLength = battleHeadings.length;
  let battleTitleContent = [];
  let battleVersusContent = [];

  for (let i = 0; i < battleLength; i++) {
    let battleVersusSplits = battleHeadings[i].vs.split("vs");
    let battleTitleSplits = battleHeadings[i].title.split("/");
    let battleTitleContent = [];
    let battleVersusContent = [];
    let versusParts =
      window.innerWidth > 600
        ? [battleVersusSplits[0], battleVersusSplits[1]]
        : [battleVersusSplits[0]];

    battleTitleSplits.forEach((battleTitleSplit) => {
      let h2 = document.createElement("h2");
      h2.textContent = battleTitleSplit;
      battleTitleContent.push(h2);
    });

    versusParts.forEach((versusPart, index) => {
      let h2 = document.createElement("h2");
      h2.textContent = versusPart;
      battleVersusContent.push(h2);
    });

    let battleTitleText = battleTitleContent
      .map((Titlecontent) => Titlecontent.outerHTML)
      .join("");
    let battleVersusText = battleVersusContent
      .map((VersusContent) => VersusContent.outerHTML)
      .join("");

    battle += `<div data-index = "${i}" class="battle-showcase${i + 1} battle-showcase">
                    <div class="battle fight">
                        ${battleVersusText}
                    </div>
                    <div class="battle-overlay fight">
                        ${battleTitleText}
                    </div>
                </div>`;
  }

  battleShowcaseSection.innerHTML = battle;

  /** Battle Image showcase **/

  if (window.innerWidth > 600) {
    if (!battleImageShowcase) return;
    document.addEventListener("mousemove", function (pos) {
      let battleImagePositionX =
        pos.clientX - battleImageShowcase.getBoundingClientRect().width / 2;
      let battleImagePositionY =
        pos.clientY - battleImageShowcase.getBoundingClientRect().height / 2;

      gsap.to(battleImageShowcase, {
        top: `${battleImagePositionY}px`,
        left: `${battleImagePositionX}px`,
      });
    });

    battleShowcaseSection.addEventListener("mouseover", function (dets) {
      gsap.to(battleImageShowcase, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.inOut",
      });

      if (dets.target.classList.contains("battle-showcase")) {
        let targetElem = dets.target;
        let targetNumber = targetElem?.dataset.index;
        let targetBattleImageSRC = battleHeadings[targetNumber].image;
        if (!battleImage) return;
        battleImage.src = targetBattleImageSRC;
      }
    });

    battleShowcaseSection.addEventListener("mouseleave", function () {
      gsap.to(battleImageShowcase, {
        opacity: 0,
        scale: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
    });
  }
}

function battleHover() {
  let battleShowCases = document.querySelectorAll(".battle-showcase");

  if (battleShowCases.length === 0) return;
  battleShowCases.forEach((battle) => {
    battle.addEventListener("mouseenter", function () {
      let battleOverlay = battle.querySelector(".battle-overlay");
      let mainBattle = battle.querySelector(".battle");
      battleOverlay.style.top = 0;
      mainBattle.style.transform = "translateY(100%)";
    });

    battle.addEventListener("mouseleave", function () {
      let battleOverlay = battle.querySelector(".battle-overlay");
      let mainBattle = battle.querySelector(".battle");
      battleOverlay.style.top = "-100%";
      mainBattle.style.transform = "translateY(0)";
    });
  });
}

function characterCardShowcases() {
  let characterCardSection = document.querySelector(".character-cards");
  let characterNameH2 = document.querySelector(".character-name");
  let playButton = document.querySelector(".play");
  let moveButtons = document.querySelectorAll(".move-btn i");
  let characterVoice = null;
  let playStateStart = true;
  let selectedCard = null;
  let card = "";

  /** card display  **/

  if (!characterCardSection) return;

  for (let i = 0; i < charactersCardArray.length; i++) {
    card += `<div data-index = "${i}" data-name = "${charactersCardArray[i].name}" data-voice = "${charactersCardArray[i].voice}" class="character-overlay">
    <div class="character-card${i} character-card">
    <div class="card-image">
    <img src="${charactersCardArray[i].image}" alt="img">
    </div>
    </div>
    </div>`;
  }

  characterCardSection.innerHTML = card;

  /** center card info **/

  let cardWidth = Number(
    characterCardSection.children[0].getBoundingClientRect().width,
  );
  let cardWidthMove = Number(
    characterCardSection.children[0].getBoundingClientRect().width,
  );
  let cardGap = parseFloat(window.getComputedStyle(characterCardSection).gap);
  let totalCards = Number(characterCardSection.childElementCount);
  let cardSectionTotalWidth =
    totalCards * (cardWidth + (cardGap - cardGap / totalCards));
  characterCardSection.style.transform = `translateX(${characterCardSection.getBoundingClientRect().width / 2 - cardWidth / 2}px)`;

  function centerCardInfo() {
    let centerElem = document.elementFromPoint(
      window.innerWidth / 2,
      window.innerHeight / 2,
    );
    if (!centerElem) return;
    let ExactCard = centerElem?.closest(".character-overlay");
    if (!ExactCard) return;
    selectedCard = ExactCard;

    characterNameH2.textContent = ExactCard.dataset.name;
    characterVoice = ExactCard.dataset.voice;
    let allCards = document.querySelectorAll(".character-overlay");

    if (allCards.length === 0) return;
    allCards.forEach((card) => {
      if (card === ExactCard) {
        gsap.to(card, {
          scale: 1,
          duration: 0.25,
          ease: "power3.inOut",
        });
      } else {
        gsap.to(card, {
          scale: 0.7,
          duration: 0.25,
          ease: "power3.inOut",
        });
      }
    });
  }

  let moveIndex = 0;
  function moveCard(cardIndex) {
    if (cardIndex === 0 && moveIndex !== 0) {
      moveIndex--;
      gsap.to(characterCardSection, {
        x: `+=${cardWidthMove + cardGap}px`,
        duration: 0.2,
        ease: "power2.inOut",
        onComplete: () => {
          centerCardInfo();
        },
      });
    }
    if (cardIndex === 1 && moveIndex < totalCards - 1) {
      moveIndex++;
      gsap.to(characterCardSection, {
        x: `-=${cardWidthMove + cardGap}px`,
        duration: 0.2,
        ease: "power2.inOut",
        onComplete: () => {
          centerCardInfo();
        },
      });
    }
  }

  if (!playButton) return;
  playButton.addEventListener("click", function () {
    if (playStateStart) {
      centerCardInfo();
      moveButtons.forEach((button) => {
        gsap.to(button, {
          opacity: 1,
          pointerEvents: "auto",
          display: "block",
          duration: 0.2,
          ease: "power2.inOut",
        });
      });
      playButton.textContent = "select";
      playStateStart = false;
    } else {
      if (!characterVoice) return;
      let voice = new Audio();
      voice.src = characterVoice;
      voice.load();
      voice.play();

      /** if navbar open then **/
      if (isMenuButtonClicked) {
        navbars.style.borderBottomLeftRadius = "6px";
        navbars.style.borderBottomRightRadius = "6px";
        gsap.to(navbars.querySelector(".links"), {
          opacity: 0,
          duration: 0.2,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.to(navLinkSection, {
              height: 0,
              duration: 0.2,
              ease: "power2.inOut",
            });
          },
        });
        isMenuButtonClicked = false;
      }

      /** getting Index **/

      if (selectedCard === null) return;
      voice.onended = () => {
        journeyPageData.characterIndex = selectedCard.dataset.index;
        storingDataLocally();
        unlockScroll();

        if (!isDataStoreLocally) return;
        pageTransitionGrid();
      };
    }
  });

  if (moveButtons.length === 0) return;
  moveButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      moveCard(index);
    });
  });
}

function demonSlayerPlacesImageDisplay() {
  let placesImageSection = document.querySelectorAll(
    ".message-section .message-content .message-images",
  );

  if (placesImageSection.length === 0) return;
  placesImageSection.forEach((place) => {
    let imageBlock = place.querySelectorAll(".image-block img");

    if (imageBlock.length === 0) return;
    imageBlock.forEach((block, index) => {
      block.src = demonSlayerPlacesArray[index];
    });
  });
}

function missionBoxPixelEffect() {
  const missionLookSections = document.querySelectorAll(
    ".missions-section .mission .mission-box .mission-look",
  );

  if (!missionLookSections.length) return;

  const GRID_SIZE = 30;
  let isAnyMissionBoxVideoPlayed = false;

  const { width, height } = missionLookSections[0].getBoundingClientRect();

  const cols = Math.ceil(width / GRID_SIZE);
  const rows = Math.ceil(height / GRID_SIZE);
  const totalBoxes = cols * rows;

  missionLookSections.forEach((section) => {
    section.style.position = "relative";

    const gridSection = document.createElement("div");
    gridSection.classList.add("mission-grid-section");
    section.appendChild(gridSection);

    /** Create grid boxes **/

    if (window.innerWidth > 600) {
      const fragment = document.createDocumentFragment();

      for (let i = 0; i < totalBoxes; i++) {
        const box = document.createElement("div");
        box.classList.add("grid-box");
        fragment.appendChild(box);
      }

      gridSection.appendChild(fragment);
    }

    const video = section.querySelector("video");

    /** video play **/

    let activeSection = null;

    section.addEventListener("click", () => {
      const grid = section.querySelector(".mission-grid-section");
      const img = section.querySelector("img");
      const video = section.querySelector("video");

      gsap.killTweensOf([grid, img]);

      if (activeSection === section) {
        gsap.to([grid, img], {
          opacity: 1,
          pointerEvents: "auto",
          duration: 0.2,
          onComplete: () => {
            if (video) {
              video.pause();
              video.currentTime = 0;
            }
          },
        });

        activeSection = null;
        return;
      }

      missionLookSections.forEach((el) => {
        if (el === section) return;

        const otherGrid = el.querySelector(".mission-grid-section");
        const otherImg = el.querySelector("img");
        const otherVideo = el.querySelector("video");

        gsap.killTweensOf([otherGrid, otherImg]);

        gsap.to([otherGrid, otherImg], {
          opacity: 1,
          pointerEvents: "auto",
          duration: 0.2,
        });

        if (otherVideo) {
          otherVideo.pause();
          otherVideo.currentTime = 0;
        }
      });

      gsap.to([grid, img], {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.2,
        onComplete: () => {
          if (video) {
            video.loop = true;
            video.load();
            video.play();
          }
        },
      });

      activeSection = section;
    });

    gridSection.addEventListener("mouseover", (e) => {
      if (!e.target.classList.contains("grid-box")) return;

      const opacity = parseFloat(window.getComputedStyle(gridSection).opacity);
      if (opacity === 0) return;

      const randomSymbol =
        demonSlayerSymbols[
          Math.floor(Math.random() * demonSlayerSymbols.length)
        ];

      const box = e.target;
      box.textContent = randomSymbol;

      gsap.to(box, {
        opacity: 1,
        duration: 0.2,
      });
    });

    gridSection.addEventListener("mouseout", (e) => {
      if (!e.target.classList.contains("grid-box")) return;

      gsap.to(e.target, {
        opacity: 0,
        duration: 0.2,
        delay: missionBoxdelayTime,
      });
    });
  });
}

function journeyPageDataDisplay() {
  let journeyShowcaseSection = document.querySelector(
    ".journey-showcase-section",
  );
  let characterName = document.querySelector(
    ".journey-showcase-section .journey-top .journey-top-left .name-head h2",
  );
  let characterNameInJapanese = document.querySelector(
    ".journey-showcase-section .journey-top .journey-top-left .name-head h3",
  );
  let journey = document.querySelectorAll(
    ".journey-showcase-section .journey-showcase .journey",
  );
  let root = document.documentElement;

  if (
    !journeyShowcaseSection ||
    characterJourneyDataArray.length === 0 ||
    journeyPageData.characterIndex === null
  )
    return;
  let Index = localStorage.getItem("selectedCardIndex")
    ? JSON.parse(localStorage.getItem("selectedCardIndex")).characterIndex
    : null;

  if (Index === null) return;
  let colorTheme = characterJourneyDataArray[Index].theme;

  characterName.textContent = characterJourneyDataArray[Index].name;
  characterNameInJapanese.textContent =
    characterJourneyDataArray[Index].japaneseName;
  root.style.setProperty("--journey-page-color-palette", colorTheme);

  if (journey.length === 0) return;
  journey.forEach((jour, i) => {
    let paraHead = jour.querySelector(".journey-text .journey-para h2");
    let ActualPara = jour.querySelector(".journey-text .journey-para p");
    let image = jour.querySelector(".journey-image img");

    if (i === 0) {
      paraHead.textContent = characterJourneyDataArray[Index].firstLife;
      ActualPara.textContent = characterJourneyDataArray[Index].firstJourney;
      image.src = characterJourneyDataArray[Index].imageFirstLife;
    }
    if (i === 1) {
      paraHead.textContent = characterJourneyDataArray[Index].secondLife;
      ActualPara.textContent = characterJourneyDataArray[Index].secondJourney;
      image.src = characterJourneyDataArray[Index].imageSecondLife;
    }
    if (i === 2) {
      paraHead.textContent = characterJourneyDataArray[Index].thirdLife;
      ActualPara.textContent = characterJourneyDataArray[Index].thirdJourney;
      image.src = characterJourneyDataArray[Index].imageThirdLife;
    }
  });
}

function displayParaOverlay() {
  let bigPara = document.querySelectorAll(".big-para");

  if (bigPara.length === 0) return;
  bigPara.forEach((bigP) => {
    let paras = bigP.querySelectorAll("p");
    let overFlow = window.getComputedStyle(bigP).overflow;
    if (overFlow !== "hidden") {
      bigP.style.overFlow = "hidden";
    }

    if (paras.length === 0) return;
    paras.forEach((para) => {
      let paraOverlay = document.createElement("span");
      paraOverlay.classList.add("para-overlay");
      para.appendChild(paraOverlay);
      para.style.position = "relative";
      para.style.overflow = "hidden";
      para.style.width = "fit-content";
    });
  });
}

function navbarPosition() {
  let navbar = document.querySelector(".navbar");

  if (
    (window.innerWidth < 600 &&
      document.title ===
        "Demon Slayer | Kimetsu No Yaiba - Character Journey") ||
    document.title === "Demon Slayer | Kimetsu No Yaiba - Character Gallery"
  ) {
    navbar.style.top = "20px";
  }
}

function gridBoxGenerationForAnimation(
  sectionOfGrid,
  typeOfFadeAnimation,
  gridBoxSize,
  backgroundColor,
) {
  if (
    !sectionOfGrid ||
    typeOfFadeAnimation.length === 0 ||
    !gridBoxSize ||
    !backgroundColor
  )
    return;

  let generativeGridSection = sectionOfGrid;
  let FadeType = typeOfFadeAnimation;
  let bgColor = backgroundColor;
  if (window.getComputedStyle(generativeGridSection).position === "static") {
    generativeGridSection.style.position = "relative";
  }
  let sectionWidth = Number(
    generativeGridSection?.getBoundingClientRect().width,
  );
  let sectionHeight = Number(
    generativeGridSection?.getBoundingClientRect().height,
  );
  let grid_size = gridBoxSize;
  let rows = Math.ceil(sectionHeight / grid_size);
  let cols = Math.ceil(sectionWidth / grid_size);
  let totalBoxes = Math.ceil(rows * cols);

  /** generate grid box **/

  let divForGrid = document.createElement("div");
  divForGrid.classList.add("div-for-grid");
  divForGrid.style.height = `${sectionHeight}px`;
  divForGrid.style.width = `${sectionWidth}px`;
  divForGrid.style.gridTemplate = `repeat(${rows}, ${grid_size}px) / repeat(${cols}, ${grid_size}px)`;
  generativeGridSection?.appendChild(divForGrid);

  for (let i = 0; i < totalBoxes; i++) {
    let gridBox = document.createElement("div");
    gridBox.classList.add("grid-animation-box");
    gridBox.style.width = `${grid_size}px`;
    gridBox.style.height = `${grid_size}px`;
    gridBox.style.opacity = `${FadeType}`;
    gridBox.style.backgroundColor = `${bgColor}`;
    divForGrid?.append(gridBox);
  }
}

function pageTransitionGrid() {
  let transitionGridSection = document.querySelector(".page-transition-grid");
  let tl = gsap.timeline({
    default: {
      ease: "power2.inOut",
    },
  });

  if (!transitionGridSection) return;
  tl.to(transitionGridSection, {
    opacity: 1,
    duration: 0.2,
    pointerEvents: "auto",
  });

  tl.to(transitionGridSection?.querySelectorAll(".grid-animation-box"), {
    opacity: 1,
    duration: 0.1,
    stagger: {
      each: window.innerWidth > 600 ? 0.025 : 0.05,
      grid: "auto",
      from: "random",
    },
    onComplete: () => {
      unlockScroll();
      if (PageIndex !== null) {
        isAnyMissionBoxVideoPlayed = false;
        window.open(pageTransitionLinksArray[PageIndex], "_blank");
      }

      if(isMenuButtonClicked) return;
      if (
        document.title === "Demon Slayer | Kimetsu No Yaiba - Character Gallery"
      ) {
        window.open("journey.html", "_blank");
      }
    },
  });

  tl.to(transitionGridSection?.querySelectorAll(".grid-animation-box"), {
    opacity: 0,
    duration: 0.1,
    delay: 0.2,
    stagger: {
      each: window.innerWidth > 600 ? 0.025 : 0.05,
      grid: "auto",
      from: "random",
    },
  });

  tl.to(transitionGridSection, {
    opacity: 0,
    duration: 0.2,
    pointerEvents: "none",
    onComplete: () => {
      tl.kill();
    },
  });
}

function addingOverflowHidden() {
  let headAnim = document.querySelectorAll(".head-anim h2");
  let paraAnim = document.querySelectorAll(".para-anim p");

  if (!headAnim.length || !paraAnim.length) return;
  [headAnim, paraAnim].forEach((anim, animIndex) => {
    anim.forEach((elem) => {
      if (!elem) return;
      let actualHead = animIndex === 0 ? elem?.parentElement : elem;
      if (window.getComputedStyle(actualHead).overflow !== "hidden") {
        actualHead.style.overflow = "hidden";
      };
      if (animIndex === 0) {
        elem.style.transform = "translateY(100%)";
      } else {
        gsap.set(elem?.querySelectorAll("span"), {
          y: "100%",
        });
      }
    });
  });
}

function secondTimeline() {
    let flickerAnim = document.querySelectorAll(".top-anim, .bottom-anim");
    let headAnim = document.querySelector(".head-anim");
    let paraAnim = document.querySelector(".para-anim");

    if (!flickerAnim || !headAnim || !paraAnim) return;
    gsap.to(flickerAnim, {
      ease: "none",
      onComplete: () => {
        flickerAnim.forEach((flicker) => {
          flicker.classList.add("flicker-elem");
        });
      },
    });
    gsap.to(headAnim.querySelectorAll("h2"), {
      y: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "power.inOut",
    });
    gsap.to(paraAnim.querySelectorAll("p span"), {
      y: 0,
      duration: 0.6,
      stagger: 0.05,
      ease: "power2.inOut",
    });
}

/** lock scrolling **/

function lockScroll() {
  const scrollY = window.scrollY;
  document.body.dataset.scrollY = scrollY;

  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
}

function unlockScroll() {
  const scrollY = document.body.dataset.scrollY;

  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";

  window.scrollTo(0, parseInt(scrollY || "0"));
}

/** function web animations **/

function scrollTriggerAnimation() {
  function HomePageAnimation() {
    /** stats section **/

    const statHead = document.querySelector(".stats-section .stat-head");
    if (statHead) {
      const statHeading = statHead.querySelectorAll(".stat-heading p span");
      const statPara = statHead.querySelector(".stat-para");
      const paraOverlay = statHead.querySelectorAll(
        ".stat-para p .para-overlay",
      );

      if (statHeading.length) {
        gsap.from(statHeading, {
          y: "100%",
          duration: 0.3,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: statHead,
            start: "top bottom",
            end: "top 80%",
            scrub: 2,
          },
        });
      }

      if (paraOverlay.length && statPara) {
        gsap.to(paraOverlay, {
          left: "100%",
          duration: 1,
          stagger: 0.3,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: statPara,
            start: "top bottom",
            end: "top top",
            scrub: 2,
          },
        });
      }
    }

    /** mission section **/

    const missionSection = document.querySelector(".missions-section");
    if (missionSection) {
      const missionHeadText = missionSection.querySelectorAll(
        ".missions-head p span",
      );
      const missionHead = missionSection.querySelector(".missions-head");
      const missionDisplay = missionSection.querySelector(".missions-display");

      if (missionHeadText.length) {
        gsap.from(missionHeadText, {
          y: "100%",
          duration: 0.4,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: missionHead,
            start: "top 70%",
            end: "top 40%",
            scrub: 2,
          },
        });
      }

      if (missionDisplay && missionDisplay.children.length) {
        const panelHeight =
          (missionDisplay.childElementCount - 1) *
          missionDisplay.children[0].getBoundingClientRect().height;

        gsap.to(missionDisplay, {
          y: `-${panelHeight}px`,
          ease: "none",
          scrollTrigger: {
            trigger: missionSection,
            start: "top top",
            end: `+=${panelHeight}`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
          },
        });
      }
    }

    /** message section **/

    const messageSections = document.querySelector(".message-section");

    if (!messageSections) return;

    const messageImages = messageSections.querySelector(".message-images");
    const imageBlocks = messageSections.querySelectorAll(".image-block");
    const messageTextImage = messageSections.querySelector(".message-text img");
    const messagePara = messageSections.querySelectorAll(
      ".message-para p span",
    );
    const messageButton = messageSections.querySelector(".send-message-btn");

    if (!messageImages || !imageBlocks.length) return;

    // initial transform
    imageBlocks.forEach((block, index) => {
      const isEven = index % 2 === 0;
      const rotate = isEven ? -30 : 30;
      const x = isEven ? -70 : 70;
      block.style.transform = `translateX(${x}%) rotate(${rotate}deg)`;
    });

    gsap.from(imageBlocks, {
      rotate: 0,
      x: 0,
      duration: 2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: messageImages,
        start: "top 50%",
        end: "top -30%",
        scrub: 2,
      },
    });

    if (messageTextImage) {
      gsap.from(messageTextImage, {
        scale: 0,
        duration: 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: messageImages,
          start: "top 20%",
          end: "top -20%",
          scrub: 2,
        },
      });
    }

    if (messagePara.length) {
      gsap.from(messagePara, {
        y: "100%",
        duration: 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: messageImages,
          start: "top 20%",
          end: "top -20%",
          scrub: 2,
        },
      });
    }

    if (messageButton) {
      gsap.from(messageButton, {
        scale: 0,
        duration: 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: messageImages,
          start: "top 20%",
          end: "top -20%",
          scrub: 2,
        },
      });
    }
  }

  function CorpPageAnimation() {
    /** history section **/

    const historyStats = document.querySelector(".history-stats");
    if (historyStats) {
      const historyStatsHead = historyStats.querySelector(
        ".history-stats-left h3",
      );
      const historyParaOverlay = historyStats.querySelectorAll(".para-overlay");

      if (historyStatsHead) {
        gsap.to(historyStatsHead, {
          ease: "none",
          scrollTrigger: {
            trigger: historyStats,
            start: "top 50%",
            scrub: 2,
            onEnter: () => {
              if (!historyStatsHead) return;
              historyStatsHead.classList.add("flicker-elem");
            },
          },
        });
      }

      if (historyParaOverlay.length) {
        gsap.to(historyParaOverlay, {
          x: "100%",
          duration: 1,
          stagger: 0.3,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: historyStats,
            start: "top bottom",
            end: "top top",
            scrub: 2,
          },
        });
      }
    }

    /** breathing section **/

    const breathingSection = document.querySelector(".breathing-shown");
    if (breathingSection) {
      const progressBar = breathingSection.querySelector(".progress-bar");
      const boxesWrapper = breathingSection.querySelector(".breathing-boxes");
      const boxes = breathingSection.querySelectorAll(".breathing-box");

      if (boxesWrapper && boxes.length) {
        const count = boxesWrapper.childElementCount;
        const boxWidth = boxesWrapper.children[0].getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(boxesWrapper).gap);

        const visibleCount = window.innerWidth > 600 ? count - 2 : count - 1;

        const moveLength = visibleCount * boxWidth + gap * (count - 1);

        gsap.to(boxes, {
          x: `-${moveLength}`,
          ease: "none",
          scrollTrigger: {
            trigger: breathingSection,
            start: "top top",
            end: `+=${moveLength}`,
            pin: true,
            scrub: 2,
          },
          onUpdate() {
            if (!progressBar) return;
            gsap.set(progressBar, {
              width: `${this.progress() * 100}%`,
            });
          },
        });
      }
    }

    /** map section **/

    const mapSection = document.querySelector(".map-section");
    if (mapSection) {
      const mapText = mapSection.querySelectorAll(".map-head h2");

      if (mapText.length) {
        gsap.from(mapText, {
          y: "100%",
          duration: 0.4,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: mapSection,
            start: "top 80%",
            end: "top 40%",
            scrub: 2,
          },
        });
      }
    }

    /** old bloodline section **/

    let oldHashiraSection = document.querySelector(".old-hashira-showdown");
    if (oldHashiraSection) {
      let oldHashiraHead = oldHashiraSection.querySelectorAll(
        ".old-hashira-top .old-hashira-head p span",
      );
      let oldHashiraNumber = oldHashiraSection.querySelectorAll(
        ".old-hashira-top .old-hashira-number h2",
      );
      let oldHashiraRotatingCircle = oldHashiraSection.querySelector(
        ".old-hashira-card .rotate-circle-card",
      );
      let oldHashiraSectionLength = Number(
        oldHashiraSection.getBoundingClientRect().height,
      );

      if (oldHashiraHead) {
        gsap.from(oldHashiraHead, {
          y: "100%",
          duration: 0.4,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: oldHashiraSection,
            start: "top 70%",
            end: "top 40%",
            scrub: 2,
          },
        });
      }

      if (oldHashiraRotatingCircle || oldHashiraNumber) {
        gsap.to(oldHashiraRotatingCircle, {
          rotate: -180,
          ease: "none",
          scrollTrigger: {
            trigger: oldHashiraSection,
            start: "top top",
            end: `+=${oldHashiraSectionLength * 4}`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            onUpdate: (self) => {
              let circleProgress = self.progress * 850;
              if (circleProgress <= 300 || circleProgress > 800) return;
              gsap.to(oldHashiraNumber, {
                y: `-${(circleProgress - 300) * 0.8}%`,
                ease: "none",
              });
            },
          },
        });
      }
    }

    /** message section **/

    const messageSections = document.querySelector(".message-section");

    if (!messageSections) return;

    const messageImages = messageSections.querySelector(".message-images");
    const imageBlocks = messageSections.querySelectorAll(".image-block");
    const messageTextImage = messageSections.querySelector(".message-text img");
    const messagePara = messageSections.querySelectorAll(
      ".message-para p span",
    );
    const messageButton = messageSections.querySelector(".send-message-btn");

    if (!messageImages || !imageBlocks.length) return;

    // initial transform
    imageBlocks.forEach((block, index) => {
      const isEven = index % 2 === 0;
      const rotate = isEven ? -30 : 30;
      const x = isEven ? -70 : 70;
      block.style.transform = `translateX(${x}%) rotate(${rotate}deg)`;
    });

    gsap.from(imageBlocks, {
      rotate: 0,
      x: 0,
      duration: 2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: messageImages,
        start: "top 50%",
        end: "top -30%",
        scrub: 2,
      },
    });

    if (messageTextImage) {
      gsap.from(messageTextImage, {
        scale: 0,
        duration: 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: messageImages,
          start: "top 20%",
          end: "top -20%",
          scrub: 2,
        },
      });
    }

    if (messagePara.length) {
      gsap.from(messagePara, {
        y: "100%",
        duration: 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: messageImages,
          start: "top 20%",
          end: "top -20%",
          scrub: 2,
        },
      });
    }

    if (messageButton) {
      gsap.from(messageButton, {
        scale: 0,
        duration: 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: messageImages,
          start: "top 20%",
          end: "top -20%",
          scrub: 2,
        },
      });
    }
  }

  function JourneyPageAnimation() {
    let journeySections = document.querySelectorAll(
      ".journey-showcase-section .journey-showcase .journey",
    );

    if (journeySections.length === 0) return;
    journeySections.forEach((jour_section, index) => {
      gsap.to(jour_section?.querySelectorAll(".grid-animation-box"), {
        opacity: 0,
        duration: 0.6,
        ease: "expo.inOut",
        stagger: {
          each: 0.05,
          from: "random",
          grid: "auto",
          ease: "power2.Out",
        },
        scrollTrigger: {
          trigger: jour_section,
          start: "top 50%",
          end: "top 50%",
          scrub: 2,
        },
      });
    });
  }
  /** page funtion calling **/

  if (
    document.title === "Demon Slayer | Kimetsu No Yaiba - Breathing World" ||
    document.title === "Demon Slayer | Kimetsu No Yaiba"
  ) {
    HomePageAnimation();
  }
  if (document.title === "Demon Slayer | Kimetsu No Yaiba - Corps History") {
    CorpPageAnimation();
  }
  if (
    document.title === "Demon Slayer | Kimetsu No Yaiba - Character Journey"
  ) {
    JourneyPageAnimation();
  }
}

function HomeLoaderAnimation() {
  let homeLoader = document.querySelector(".home-loader");
  let loaderSvg = document.querySelector(
    ".home-loader .home-loader-content .loader-svg",
  );
  let svgAnimateElem = document.querySelectorAll(
    ".home-loader .home-loader-content .loader-svg svg path",
  );
  let musicAskedBlock = document.querySelector(
    ".home-loader .home-loader-content .music-asked-block",
  );
  let introMusic = new Audio();
  let tl = gsap.timeline({
    paused: true,
    onComplete: () => {
      if (!introMusic) return;
      introMusic.pause();
      ((introMusic.currentTime = 0), tl.kill());
    },
  });
  lockScroll();
  introMusic.src = "music/kamado_tanjiro_no_uta.mp3";
  introMusic.loop = false;
  introMusic.muted = true;

  if (svgAnimateElem.length === 0) return;
  svgAnimateElem.forEach((svgElem) => {
    let svgElemLength = svgElem.getTotalLength();

    gsap.set(svgElem, {
      strokeDashoffset: svgElemLength,
      strokeDasharray: svgElemLength,
      strokeWidth: 0.8,
    });
  });

  setTimeout(() => {
    gsap.to(musicAskedBlock, {
      opacity: 1,
      scale: 1,
      duration: 1,
      transform: "translate(-50%,-50%)",
      ease: "power2.inOut",
    });
  }, 500);

  tl.to(svgAnimateElem, {
    strokeDashoffset: 0,
    duration: 4.25,
    ease: "power1.out",
    stagger: -0.6,
  });
  tl.to(
    svgAnimateElem,
    {
      fill: "#d7ab48",
      ease: "power2.Out",
      duration: 1,
      filter: "drop-shadow(0 0 0.8px #d7ab48)",
      attr: {
        stroke: "#ffffff0a",
      },
    },
    "-=1.3",
  );
  tl.to(homeLoader?.querySelector(".home-loader-content"), {
    opacity: 0,
    duration: 0.4,
    ease: "power2.inOut",
    onComplete: () => {
      gsap.to(homeLoader?.querySelectorAll(".grid-animation-box"), {
        opacity: 0,
        duration: 0.1,
        stagger: {
          from: "random",
          each: window.innerWidth > 600 ? 0.05 : 0.08,
          grid: "auto",
        },
        onComplete: () => {
          secondTimeline();
          homeLoader.style.display = "none";
          unlockScroll();
        },
      });
    },
  });

  /** tl play **/
  if (!musicAskedBlock) return;
  let askedButton = musicAskedBlock.querySelectorAll("button");

  if (askedButton.length === 0) return;
  askedButton.forEach((button, btnI) => {
    button.addEventListener("click", function () {
      gsap.to(musicAskedBlock, {
        opacity: 0,
        scale: 0,
        duration: 0.4,
        ease: "expo.inOut",
        onComplete: () => {
          setTimeout(() => {
            gsap.to(loaderSvg, {
              opacity: 1,
              duration: 0.2,
            });
            if (btnI === 0) {
              introMusic.muted = false;
              introMusic.load();
              introMusic.play();
              tl.play();
              if (window.innerWidth < 600) tl.timeScale(1.15);
            } else {
              tl.play();
              tl.timeScale(2);
            }
          }, 1000);
        },
      });
    });
  });
}

function otherPageLoader() {
  if (!otherLoader) return;
  let otherLoaderContent = otherLoader.querySelectorAll(
    ".other-loader-content",
  );
  let otherLoaderGridBox = otherLoader.querySelectorAll(".grid-animation-box");

  gsap.to(otherLoaderGridBox, {
    opacity: 0,
    duration: 0.1,
    delay: 0.8,
    ease: "power2.inOut",
    stagger: {
      each: window.innerWidth > 600 ? 0.025 : 0.05,
      grid: "auto",
      from: "random",
    },
    onStart: () => {
      if (!(otherLoaderContent instanceof HTMLElement)) return;
      otherLoaderContent.style.opacity = 0;
    },
    onComplete: () => {
      secondTimeline();
      otherLoader.style.display = "none";
      unlockScroll();
    },
  });
}

/** function calling **/

document.addEventListener("DOMContentLoaded", () => {
  splitLines();
  navbarPosition();
  gridBoxDisplay();
  missionContentDisplay();
  combatShowcases();
  addingOverflowHidden();
  if (window.innerWidth > 600) {
    sectionHeightAssign();
    battleHover();
    missionBoxPixelEffect();
    demonSlayerPlacesImageDisplay();
  }
  circleCardMotion();
  characterCardShowcases();
  socialButtonInfoDisplay();
  PageTransitionButton();
  journeyPageDataDisplay();
  displayParaOverlay();
  gridBoxGenerationForAnimation(JourneyGridSection1, 1, 50, "#0f0f0e");
  gridBoxGenerationForAnimation(JourneyGridSection2, 1, 50, "#0f0f0e");
  gridBoxGenerationForAnimation(JourneyGridSection3, 1, 50, "#0f0f0e");
  gridBoxGenerationForAnimation(pageTransitionGridSection, 0, 50, "#0f0f0e");
  gridBoxGenerationForAnimation(homeLoader, 1, 50, "#0f0f0e");
  gridBoxGenerationForAnimation(otherLoader, 1, 50, "#0f0f0e");
});

window.addEventListener("resize", () => {
  gridBoxDisplay();
  sectionHeightAssign();
  missionBoxPixelEffect();
  if (window.innerWidth === lastWidth) return;

  clearTimeout(resizeTimeout);

  resizeTimeout = setTimeout(() => {
    gridBoxGenerationForAnimation(JourneyGridSection1, 1, 50, "#0f0f0e");
    gridBoxGenerationForAnimation(JourneyGridSection2, 1, 50, "#0f0f0e");
    gridBoxGenerationForAnimation(JourneyGridSection3, 1, 50, "#0f0f0e");
    gridBoxGenerationForAnimation(pageTransitionGridSection, 0, 50, "#0f0f0e");
    gridBoxGenerationForAnimation(homeLoader, 1, 50, "#0f0f0e");
    gridBoxGenerationForAnimation(otherLoader, 1, 50, "#0f0f0e");
  }, 250);
});

window.addEventListener("load", () => {
  lenisSetup();
  stoppingInspection();
  scrollTriggerAnimation();
  HomeLoaderAnimation();
  otherPageLoader();
  unlockScroll();
});
