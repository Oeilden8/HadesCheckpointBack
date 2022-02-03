CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mail` varchar(100) NOT NULL,
  `hashedPassword` varchar(255) NOT NULL,
  `admin` BOOLEAN NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type_name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image_name` varchar(50) NOT NULL,
  `source` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `characters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `title` varchar(100),
  `power` varchar(150),
  `description` text,
  `affiliation` varchar(100),
  `type_id` int NOT NULL,
  `image_id` int,
  PRIMARY KEY (`id`),
   KEY `fk_images` (`image_id`),
  CONSTRAINT `fk_images` FOREIGN KEY (`image_id`) REFERENCES `images` (`id`) ON DELETE CASCADE
);

INSERT INTO `images` (image_name, source) VALUES
('Achilles', 'public/images/Achilles.webp'),
('Alecto', 'public/images/Alecto.webp'),
('Aphrodite', 'public/images/Aphrodite.webp'),
('Ares', 'public/images/Ares.webp'),('Artemis', 'public/images/Artemis.webp'),
('Asterius', 'public/images/Asterius.webp'),('Athena', 'public/images/Athena.webp'),
('Cerberus', 'public/images/Cerberus.webp'),('Chaos', 'public/images/Chaos.webp'),
('Charon', 'public/images/Charon.webp'),('Demeter', 'public/images/Demeter.webp'),
('Dionysus', 'public/images/Dionysus.webp'),('Dusa', 'public/images/Dusa.webp'),
('Eurydice', 'public/images/Eurydice.webp'),('Hades', 'public/images/Hades.webp'),
('Hermes', 'public/images/Hermes.webp'),('Hypnos', 'public/images/Hypnos.webp'),
('Megaera', 'public/images/Megaera.webp'),('Nyx', 'public/images/Nyx.webp'),
('Orpheus', 'public/images/Orpheus.webp'),('Patroclus', 'public/images/Patroclus.webp'),
('Persephone', 'public/images/Persephone.webp'),('Poseidon', 'public/images/Poseidon.webp'),
('Sisyphus', 'public/images/Sisyphus.webp'),('Skelly', 'public/images/Skelly.webp'),
('Thanatos', 'public/images/Thanatos.webp'),('Theseus', 'public/images/Theseus.webp'),
('Tisiphone', 'public/images/Tisiphone.webp'),('Zagreus', 'public/images/Zagreus.webp'),('Zeus', 'public/images/Zeus.webp');

INSERT INTO `type` (type_name) VALUES
('Chtonic god'),
('Olympian god'),
('Other');

INSERT INTO `characters` (name, title, power, description, affiliation, type_id, image_id) VALUES
('Achilles', 'Forgotten Hero', null, "Achilles is a demi-god hero known for his role in the Trojan War. He is famed for his strength in battle and his near-invulnerability. After he was fatally wounded when Paris shot his heel with an arrow, his shade descended to the Underworld, where he was eventually hired by Hades to train a young Zagreus in battle and military discipline in exchange for allowing his lover Patroclus into Elysium. Since he was hired, Achilles has made an effort to be a source of support and encouragement for Zagreus in the face of Hades' often harsh treatment.", 'House of Hades', 3, 1),
('Alecto', 'Tormentor of Passions', null, "Alecto is one of the three Fury Sisters. She is sister to Megaera and Tisiphone. After Megaera has been defeated a certain amount of times, Alecto and Tisiphone will begin appearing, randomly replacing her at the end of Tartarus. Alecto does not appear in the House of Hades after she has been defeated.", null, 1, 2),
('Aphrodite', 'Goddess of Love And Beauty', 'Curse of Weakness', "Aphrodite offers boons to Zagreus that inflict her signature Status Curse, Weak, which reduces the damage afflicted enemies do by 30% or make them more susceptible to damage. Her boons not only increase your damage significantly, offering the largest additive damage boosts for your Attack and Special, but also your survivability, making enemy attacks less effective as you fight them.", null, 2, 3),
('Ares', 'God of War', 'Curse of Doom', "Ares is the Olympian God of war. Unlike the more strategically-oriented Athena, Ares' domain is the physical, violent, and untamed aspects of warfare. He offers boons to Zagreus, which can increase his ability damage, inflict his signature Status Curse, Doom, or create Blade Rifts which deal rapid damage to enemies who walk into them. Ares boons deal high amounts of damage over time, either by keeping enemies inside Blade Rifts, or by continuously applying Doom to enemies.", null, 2, 4),
('Artemis', 'Goddess of the Hunt', 'Critical Damage', "Artemis is the Olympian Goddess of the hunt and the wilderness. She offers boons to Zagreus which give his abilities the chance to deal Critical damage. In addition, she also offers boons that improve Cast abilities. While the damage bonus offered on her boons is lower compared to other Gods', the Critical hits they offer deal three times the damage of a normal ability, granting the best overall DPS gain. In addition, her Cast related boons increase your total ammo or add a projectile, further enabling a powerful ranged tool. Her signature Status Curse is Marked, which increases the chance of dealing a critical hit to the afflicted enemy, consuming the Curse and reapplying it to a nearby target.", null, 2, 5),
('Asterius', 'Bull of Minos', null, "Asterius, also known as the Minotaur, is a bull-headed demi-human who was recruited by Hades to help prevent Zagreus's escape. In life, Asterius was locked in a labyrinth by his father, King Minos, only to eventually be slain by Theseus. In death, the two are apparently comrades. Asterius is a potential mid-boss encounter in Elysium, as well as always appearing as the final boss of Elysium, alongside King Theseus in the Elysium Stadium.", 'House of Hades', 3, 6),
('Athena', 'Goddess of Wisdom', 'Deflection', "Athena is the Olympian Goddess of wisdom and strategic warfare. She offers boons to Zagreus that cause his abilities to Deflect enemy attacks. In addition, she also offers boons that reduce damage or increase other defensive options. Athena offers excellent defensive options with her boons, protecting you from damage with the ability to deflect enemy projectiles and melee attacks, as well as reduce the damage you will take in a run. Her signature Status Curse is Exposed, which causes enemies to take additional damage from behind.", null, 2, 7),
('Cerberus', 'Hound of Hell', 'The power of cuddles', "Cerberus is a massive three-headed dog charged with guarding the gates of the Underworld to prevent the dead from escaping. He is a magnificent beast, companion of Hades and Zagreus. When Zagreus left the House for the first time, Cerberus threw a tantrum that wrecked the House's lounge area. Once Zagreus reaches the Temple of Styx, Cerberus guards its exit. Zagreus must find a Satyr Sack, Cerberus's favourite snack, as a bribe to leave the area.", 'House of Hades', 3, 8),
('Chaos', 'Primordial Originator', 'Choice', "Chaos is the embodiment of the primordial void from which Nyx and the Titans arose. They offer boons to Zagreus which, unlike the instant boosts offered by the Olympian gods, trade a debuff for a certain number of encounters in exchange for greater power further down the line.", null, 1, 9),
('Charon', 'Stygian Boatman', 'Trading', "Charon is the boatman of the river Styx, responsible for ferrying deceased souls across the river and into the underworld. In Greek mythology, he required a single obol - placed into the mouth before burial - as payment for his services, or else the soul in question would be left to wander the banks of the Styx for a hundred years. Charon's services in-game are, unfortunately, much more expensive; he functions as the game's shopkeeper.", null, 1, 10),
('Demeter', 'Goddess of Seasons', 'Frost', "Demeter is the goddess of agriculture as well as sacred law and the cycle of life and death, the giver of life and in turn, the taker of it. Many of the boons she offers to Zagreus inflict her signature Status Curse, Chill, which causes enemies to slow down and, possibly, shatter, spreading the Curse. In addition to that, she offers the 2nd highest raw percentage damage increase. Her other boons vary between helping survivability by healing, increasing damage, or boosting your different boons over time by increasing their rarity.", null, 2, 11),
('Dionysus', 'God of Wine', 'Getting hangover', "Dionysus is the Olympian God of wine and madness, and cousin to Zagreus. He offers boons to Zagreus revolving around his signature Status Curse, Hangover, slowing, and stunning enemies, as well as various drinking-themed Boons. Dionysus offers strong damage over time abilities on nearly all his offensive boons. However, he can also give Zagreus strong utility abilities in the forms of stuns, slows, heals and health, damage reduction effects, and items.", null, 2, 12),
('Dusa', 'Duty-Bound Gorgon', null, "Dusa is a shade in the form of a floating, disembodied Gorgon's head. She works as a maid in the House of Hades, constantly floating around and cleaning.", 'House of Hades', 3, 13),
('Eurydice', 'Carefree Muse', null, "Eurydice is a deceased oak nymph and the former wife of the musician Orpheus. Despite having some qualities of other gods and immortals, she died from a snake bite and was ferried to Underworld. A grieving Orpheus ventured to the Underworld to plea for her return. He charmed Lord Hades with his music and was given leave to bring Eurydice with him back to the surface, on the condition that he not look back at her until he left the Underworld. Ultimately he succumbed to his own insecurities, and Eurydice was forced to remain in the land of the dead. Eurydice now resides in her own private corner of Asphodel, where she spends eternity singing and cooking with the help of the river Phlegethon's heat.", 'Shade', 3, 14),
('Hades', 'God of the Dead', 'Spear Master', "Hades is the god of the Underworld and of the mineral riches of the earth, the lord and master of the House of Hades, and the father of Zagreus. He is in charge of maintaining order within the Underworld, determining the placements and punishments of the dead, and hearing the petitions of shades that come before him.", null, 1, 15),
('Hermes', 'God of Swiftness', 'Enhance speed', "Hermes is the Olympian God of commerce, trickery, and travel, as well as the messenger of the gods and conductor of souls into the afterlife (called a psychopomp). He offers boons that enhance Zagreus's speed in various ways. His boons can also improve Zagreus's dash and cast recovery.", null, 2, 16),
('Hypnos', 'Sleep incarnate', 'Falling asleep', "Hypnos is the embodiment of sleep. He is one of Nyx's many children, and the younger twin brother of Thanatos. He watches over the procession of newly-arrived shades coming before Hades, checking their names off his list. He is often seen sleeping on the job. He greets Zagreus most of the time when the prince is killed and returns to the House via the Pool of Styx, and often gives unhelpful advice and a quip about whichever enemy or natural force did Zagreus in.", null, 1, 17),
('Megaera', 'First of the Furies', 'Whip wielder', "Megaera is one of the three Fury Sisters. She is sent by Hades to stop Zagreus from escaping the Underworld. Zagreus must defeat her before progressing to Asphodel during any given escape attempt. Apparently, she has been tasked with handling matters in Tartarus apart from her sisters; this includes dealing with Zagreus. According to Megaera, a war amongst the mortals has made the Underworld particularly busy, and her sisters are handling matters elsewhere.", null, 1, 18),
('Nyx', 'Night Incarnate', 'Darkness', "Nyx, sometimes referred to as 'Mother Night', is the personification of night and a resident in the House of Hades. She gives directions, counsel, and reviews the day's work of Chthonic Gods and staff, as seen in her interactions with Megaera and Dusa. After Persephone left the Underworld, Nyx became the main caretaker of Zagreus. She eventually curried favor with the Olympian Gods and gave Zagreus the Mirror of Night to aid in his escape.", null, 1, 19),
('Orpheus', 'Court Musician', null, "Orpheus is a legendary musician. During his life, he lost his wife and muse Eurydice and ventured to the Underworld to plea for her return. Although he was ultimately unable to bring her back to life, he charmed Hades with his music such that after his death, Hades employed Orpheus as his court musician. However, because he has lost his muse, he is unable to bring himself to sing, though he may be persuaded otherwise.", 'House of Hades', 3, 20),
('Patroclus', 'Fallen Warrior', null, "Patroclus was a warrior in the Achaean army during the Trojan War, and was Achilles' life-long companion and romantic partner. He currently resides in Elysium, and is one of the few shades there who does not attack Zagreus, instead offering an assortment of items, much like Sisyphus and Eurydice.", 'Shade', 3, 21),
('Persephone', 'Goddess of Verdure and Queen of the Underworld', null, "She is Zagreus' birth mother, but has since left for the world above. It is unknown why she left, or if she was successful in her escape, but she did not die. Had she died, she would have returned to the House as he does via the River Styx. Following her departure, Hades forbade all mentions of her in the House, and as such she remains a figure of mystery.", 'House of Hades', 3, 22),
('Poseidon', 'God of the Sea', 'Knockback', "Poseidon is the god of the sea. He offers boons to Zagreus that significantly increase the damage of his abilities, as well as cause his abilities to inflict Knockback. His signature Status Curse is Ruptured, which rapidly deals damage to enemies as they move. Ruptured not only affects an enemy's movement, but also affects the movement from various other Knockback effects.", null, 2, 23),
('Sisyphus', 'Tortured Soul', null, "Sisyphus is a former king sentenced to an eternity of punishment within Tartarus for attempting to cheat death. He succeeded twice, each time only temporarily before the consequences caught up with him. His punishment is to roll a boulder up a steep hill; the boulder, however, always rolls back down the hill before he reaches the top, despite his best efforts. The Furies - and Megaera in particular - torment him as he attempts to push the boulder, though with Zagreus' recent escape attempts, they appear to be slacking on this particular duty.", 'Shade', 3, 24),
('Skelly', 'Training Dummy', null, "Skelly is a Bloodless 'employed' by the House of Hades as a training dummy. While Skelly claims to be on the House's payroll, he refuses to reveal who hired him and is similarly unwilling to discuss his past, instead preferring to play various pranks on Zagreus. Oddly, no one in the House seems to be aware of his existence besides Zagreus and Achilles. Skelly has 900 HP. As he's already dead, he will simply reform after being killed in training. He seems suspiciously enthusiastic about getting beaten up.", 'House of Hades', 3, 25),
('Thanatos', 'Death Incarnate', 'Wielder of the Scythe', "Thanatos is the personification of death. He is one of Nyx's many children and the older twin brother of Hypnos. As the embodiment of death, Thanatos has many duties requiring him to venture up into the mortal realm. His most recent such venture took longer than usual - speculated by Hypnos and Zagreus to be related to the ongoing war - but returns some time after the game's opening. He apparently dislikes the mortal realm, in particular how bright it can get.", null, 1, 26),
('Theseus', 'Hero of Athens', null, "Theseus is a former hero and king of Athens, most famous for slaying the Minotaur. He was recruited by Hades to help prevent Zagreus's escape. He fights alongside the Minotaur as the final boss of Elysium, and serves Elysium as its champion and its king.", 'House of Hades', 3, 27),
('Tisiphone', 'Tormentor of Murder', 'Saying Zagreus', "Tisiphone is one of the three Fury Sisters. She is sister to Megaera and Alecto. After Megaera has been defeated a certain number of times, Alecto and Tisiphone will begin appearing, randomly substituting her in Tartarus. Tisiphone does not appear in the House of Hades after she's been defeated.", null, 1, 28),
('Zagreus', 'Prince of the Underworld', 'Never escaping', "Zagreus, Prince of the Underworld, is the son of Hades and is the protagonist of the game. Zagreus has always had a sense that he doesn't belong in the House of Hades. Sometime before the start of the game he decides, against his father's will, to escape from the Underworld—no matter how many tries it might take him. He is aided and encouraged in his journey, primarily by his caretaker Nyx and his mentor Achilles. Others outside the House of Hades, such as Sisyphus, Charon, and the Olympians sometimes offer their aid as well.", null, 1, 29),
('Zeus', 'God of Thunder', 'Lightning', "Zeus is the god of the sky and thunder, and the ruler of the Olympian Gods. He offers boons to Zagreus which give his abilities chain lightning or lightning strikes. Zeus boons excel at dealing damage to groups of enemies, as chain lightning effects bounce between enemies, and lightning strikes can hit multiple enemies. His signature Status Curse is Jolted, which causes enemies to inflict damage to themselves when they attack, consuming the Curse.", null, 2, 30);