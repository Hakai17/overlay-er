const bossData = {
    Limgrave: [
      "Beast of Farum Azula",
      "Bell Bearing Hunter",
      "Black Knife Assassin",
      "Bloodhound Knight Darriwil",
      "Crucible Knight",
      "Deathbird",
      "Demi-Human Chief",
      "Erdtree Burial Watchdog",
      "Flying Dragon Agheel",
      "Godrick the Grafted",
      "Grave Warden Duelist",
      "Guardian Golem",
      "Mad Pumpkin Head",
      "Margit, the Fell Omen",
      "Night's Cavalry",
      "Patches",
      "Soldier of Godrick",
      "Stonedigger Troll",
      "Tibia Mariner",
      "Tree Sentinel",
      "Ulcerated Tree Spirit"
    ],
    WeepingPeninsula: [
      "Ancient Hero of Zamor",
      "Cemetery Shade",
      "Deathbird",
      "Erdtree Avatar",
      "Erdtree Burial Watchdog",
      "Leonine Misbegotten",
      "Miranda the Blighted Bloom",
      "Night's Cavalry",
      "Runebear",
      "Scaly Misbegotten"
    ],
    Liurnia: [
      "Adan, Thief of Fire",
      "Onyx Lord",
      "Alecto, Black Knife Ringleader",
      "Bell Bearing Hunter",
      "Black Knife Assassin",
      "Bloodhound Knight",
      "Bols, Carian Knight",
      "Cemetery Shade",
      "Cleanrot Knight",
      "Crystalian Spear & Crystalian Staff",
      "Crystalian Ringblade",
      "Deathbird",
      "Death Rite Bird",
      "Erdtree Avatar (Northeast)",
      "Erdtree Avatar (Southwest)",
      "Erdtree Burial Watchdog",
      "Glintstone Dragon Adula",
      "Glintstone Dragon Smarag",
      "Grafted Scion (Four Belfries)",
      "Magma Wyrm Makar",
      "Night's Cavalry (North)",
      "Night's Cavalry (South)",
      "Omenkiller",
      "Red Wolf of Radagon",
      "Rennala, Queen of the Full Moon",
      "Royal Knight Loretta",
      "Royal Revenant",
      "Spirit-Caller Snail",
      "Tibia Mariner"
    ],
    Caelid: [
      "Battlemage Hugues",
      "Cemetery Shade",
      "Cleanrot Knights",
      "Commander O'Neil",
      "Crucible Knight / Misbegotten Warrior",
      "Death Rite Bird",
      "Decaying Ekzykes",
      "Erdtree Avatar",
      "Erdtree Burial Watchdogs",
      "Fallingstar Beast",
      "Frenzied Duelist",
      "Mad Pumpkin Heads",
      "Magma Wyrm",
      "Night's Cavalry",
      "Nox Swordstress & Nox Priest",
      "Putrid Crystallian Trio",
      "Starscourge Radahn"
    ],
    Dragonbarrow: [
      "Beast of Farum Azula",
      "Bell Bearing Hunter",
      "Black Blade Kindred (Bestial Sanctum)",
      "Flying Dragon Greyll",
      "Godskin Apostle",
      "Night's Cavalry",
      "Putrid Avatar",
      "Putrid Tree Spirit"
    ],
    SiofraRiver: [
      "Ancestor Spirit",
      "Dragonkin Soldier"
    ],
    AinselRiver: [
      "Dragonkin Soldier of Nokstella"
    ],
    Nokron: [
      "Mimic Tear",
      "Regal Ancestor Spirit",
      "Valiant Gargoyles"
    ],
    DeeprootDepths: [
      "Crucible Knight Siluria",
      "Fia's Champions",
      "Lichdragon Fortissax"
    ],
    LakeOfRot: [
      "Astel, Naturalborn of the Void",
      "DragonKin Soldier"
    ],
    AltusPlateau: [
      "Ancient Dragon Lansseax",
      "Ancient Hero of Zamor",
      "Black Knife Assassin (Sage's Cave)",
      "Black Knife Assassin (Sainted Hero's Grave)",
      "Crystalian Spear & Crystalian Ringblade",
      "Demi-Human Queen Gilika",
      "Elemer of the Briar",
      "Fallingstar Beast",
      "Godefroy The Grafted",
      "Godskin Apostle",
      "Necromancer Garris",
      "Night's Cavalry",
      "Omenkiller / Miranda",
      "Perfumer Tricia / Misbegotten Warrior",
      "Sanguine Noble",
      "Stonedigger Troll",
      "Tibia Mariner",
      "Tree Sentinel Duo",
      "Wormface"
    ],
    MtGelmir: [
      "Abductor Virgins",
      "Demi-Human Queen Margot",
      "Demi-Human Queen Maggie",
      "Erdtree Burial Watchdog",
      "Full-Grown Fallingstar Beast",
      "God-Devouring Serpent / Rykard",
      "Godskin Noble",
      "Kindred of Rot",
      "Magma Wyrm",
      "Red Wolf of the Champion",
      "Ulcerated Tree Spirit"
    ],
    Leyndell: [
      "Bell Bearing Hunter",
      "Crucible Knight Ordovis / Crucible Knight",
      "Deathbird",
      "Draconic Tree Sentinel",
      "Esgar, Priest of Blood",
      "Fell Twins",
      "Godfrey, First Elden Lord (golden shade)",
      "Grave Warden Duelist",
      "Morgott, the Omen King",
      "Mohg, The Omen",
      "Onyx Lord"
    ],
    ForbiddenLands: [
      "Black Blade Kindred",
      "Mimic Tear",
      "Night's Cavalry"
    ],
    MountaintopsOfTheGiants: [
      "Ancient Hero of Zamor",
      "Borealis the Freezing Fog",
      "Commander Niall",
      "Death Rite Bird",
      "Erdtree Avatar",
      "Fire Giant",
      "Godskins (Summoner Snail)",
      "Ulcerated Tree Spirit",
      "Vyke, Knight of the Roundtable"
    ],
    ConsecratedSnowfield: [
      "Astel, Stars of Darkness",
      "Death Rite Bird",
      "Great Wyrm Theodorix",
      "Misbegotten Crusader",
      "Night's Cavalry (duo)",
      "Putrid Avatar",
      "Putrid Grave Warden Duelist"
    ],
    TheHaligtree: [
      "Loretta, Knight of the Haligtree",
      "Malenia, Blade of Miquella"
    ],
    MohgwynPalace: [
      "Mohg, Lord of Blood"
    ],
    CrumblingFarumAzula: [
      "Godskin Duo",
      "Beast Clergyman / Maliketh Black Blade",
      "Dragonlord Placidusax"
    ],
    LeyndellAshenCapital: [
      "Godfrey, First Elden Lord / Hoarah Loux",
      "Radagon of the Golden Order / Elden Beast",
      "Sir Gideon Ofnir, the All-Knowing"
    ]
  };

  export default bossData;
