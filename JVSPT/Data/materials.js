
const itemList = [
    { id: 'unknown', name: 'unknown' },
    { id: 'none', name: 'none' },
    
    { id: 'any_weapon_1', name: '1 Star Weapon' },
    { id: 'any_weapon_2', name: '2 Star Weapon' },
    { id: 'any_weapon_3', name: '3 Star Weapon' },
    { id: 'mora', name: 'Mora' },

    

    /* char-exp start */
    { id: 'enhancement_ore', name: 'Enhancement Ore', rarity: 1, type: 'char-exp'},
    { id: 'fine_enhancement_ore', name: 'Fine Enhancement Ore', rarity: 2, type: 'char-exp' },
    { id: 'mystic_enhancement_ore', name: 'Mystic Enhancement Ore', rarity: 3, type: 'char-exp' },
    /* char-exp end */

    /* weap-exp start */
    { id: 'wanderes_advice', name: "Wanderer's Advice", rarity: 2, type: 'weap-exp' },
    { id: 'adventurers_experience', name: "Adventurer's Experience", rarity: 3, type: 'weap-exp' },
    { id: 'heros_wit', name: "Hero's Wit", rarity: 4, type: 'weap-exp' },
    /* weap-exp end */

    /* misc */
    { id: 'crown_of_insight', name: 'Crown of Insight', rarity: 5 },

    /* common-asc mats start */
    // Common enemy drops
    { id: 'slime_condensate', name: 'Slime Condensate' , rarity: 1, type: 'common-asc' },
    { id: 'slime_secretions', name: 'Slime Secretions' , rarity: 2, type: 'common-asc' },
    { id: 'slime_concentrate', name: 'Slime Concentrate', rarity: 3, type: 'common-asc' },
    { id: 'damaged_mask', name: 'Damaged Mask', rarity: 1, type: 'common-asc' },
    { id: 'stained_mask', name: 'Stained Mask', rarity: 2, type: 'common-asc' },
    { id: 'ominous_mask', name: 'Ominous Mask', rarity: 3, type: 'common-asc' },
    { id: 'divining_scroll', name: 'Divining Scroll', rarity: 1, type: 'common-asc' },
    { id: 'sealed_scroll', name: 'Sealed Scroll', rarity: 2, type: 'common-asc' },
    { id: 'forbidden_curse_scroll', name: 'Forbidden Curse Scroll' , rarity: 3, type: 'common-asc' },
    { id: 'firm_arrowhead', name: 'Firm Arrowhead', rarity: 1, type: 'common-asc'  },
    { id: 'sharp_arrowhead', name: 'Sharp Arrowhead', rarity: 2, type: 'common-asc' },
    { id: 'weathered_arrowhead', name: 'Weathered Arrowhead', rarity: 3, type: 'common-asc' },
    { id: 'recruits_insignia', name: "Recruit's Insignia", rarity: 1, type: 'common-asc' },
    { id: 'sergeants_insignia', name: "Sergeant's Insignia", rarity: 2, type: 'common-asc' },
    { id: 'lieutenants_insignia', name: "Lieutenant's Insignia", rarity: 3, type: 'common-asc' },
    { id: 'treasure_hoarder_insignia', name: 'Treasure Hoarder Insignia', rarity: 1, type: 'common-asc' },
    { id: 'silver_raven_insignia', name: 'Silver Raven Insignia', rarity: 2, type: 'common-asc' },
    { id: 'golden_raven_insignia', name: 'Golden Raven Insignia', rarity: 3, type: 'common-asc' },
    { id: 'whopperflower_nectar', name: 'Whopperflower Nectar', rarity: 1, type: 'common-asc' },
    { id: 'shimmering_nectar', name: 'Shimmering Nectar', rarity: 2, type: 'common-asc' },
    { id: 'energy_nectar', name: 'Energy Nectar', rarity: 3, type: 'common-asc' },
    { id: 'old_handguard', name: 'Old Handguard', rarity: 1, type: 'common-asc' },
    { id: 'kageuchi_handguard', name: 'Kageuchi Handguard', rarity: 2, type: 'common-asc' },
    { id: 'famed_handguard', name: 'Famed Handguard', rarity: 3, type: 'common-asc' },
    { id: 'spectral_husk', name: 'Spectral Husk', rarity: 1, type: 'common-asc' },
    { id: 'spectral_heart', name: 'Spectral Heart', rarity: 2, type: 'common-asc' },
    { id: 'spectral_nucleus', name: 'Spectral Nucleus', rarity: 3, type: 'common-asc' },
    // Elite enemy drops
    { id: 'heavy_horn', name: 'Heavy Horn', rarity: 2, type: 'common-asc' },
    { id: 'black_bronze_horn', name: 'Black Bronze Horn', rarity: 3, type: 'common-asc' },
    { id: 'black_crystal_horn', name: 'Black Crystal Horn', rarity: 4, type: 'common-asc' },
    { id: 'chaos_device', name: 'Chaos Device', rarity: 2, type: 'common-asc' },
    { id: 'chaos_circuit', name: 'Chaos Circuit', rarity: 3, type: 'common-asc' },
    { id: 'chaos_core', name: 'Chaos Core', rarity: 4, type: 'common-asc' },
    { id: 'dead_ley_line_branch', name: 'Dead Ley Line Branch', rarity: 2, type: 'common-asc' },
    { id: 'dead_ley_line_leaves', name: 'Dead Ley Line Leaves', rarity: 3, type: 'common-asc' },
    { id: 'ley_line_sprouts', name: 'Ley Line Sprouts', rarity: 4, type: 'common-asc' },
    { id: 'mist_grass_pollen', name: 'Mist Grass Pollen', rarity: 2, type: 'common-asc' }, 
    { id: 'mist_grass', name: 'Mist Grass', rarity: 3, type: 'common-asc' },
    { id: 'mist_grass_wick', name: 'Mist Grass Wick', rarity: 4, type: 'common-asc' },
    { id: 'hunters_sacrificial_knife', name: "Hunter's Sacrificial Knife", rarity: 2, type: 'common-asc' },
    { id: 'agents_sacrificial_knife', name: "Agent's Sacrificial Knife", rarity: 3, type: 'common-asc' },
    { id: 'inspectors_sacrificial_knife', name: "Inspector's Sacrificial Knife", rarity: 4, type: 'common-asc' },
    { id: 'fragile_bone_shard', name: 'Fragile Bone Shard', rarity: 2, type: 'common-asc' },
    { id: 'sturdy_bone_shard', name: 'Sturdy Bone Shard', rarity: 3, type: 'common-asc' }, 
    { id: 'fossilized_bone_shard', name: 'Fossilized Bone Shard', rarity: 4, type: 'common-asc' },
    { id: 'chaos_gear', name: 'Chaos Gear', rarity: 2, type: 'common-asc' },
    { id: 'chaos_axis', name: 'Chaos Axis', rarity: 3, type: 'common-asc' },
    { id: 'chaos_oculus', name: 'Chaos Oculus', rarity: 4, type: 'common-asc' },
    { id: 'dismal_prism', name: 'Dismal Prism', rarity: 2, type: 'common-asc' },
    { id: 'crystal_prism', name: 'Crystal Prism', rarity: 3, type: 'common-asc' },
    { id: 'polarizing_prism', name: 'Polarizing Prism', rarity: 4, type: 'common-asc' },
    { id: 'concealed_claw', name: 'Concealed Claw', rarity: 2, type: 'common-asc' },
    { id: 'concealed_unguis', name: 'Concealed Unguis', rarity: 3, type: 'common-asc' },
    { id: 'concealed_talon', name: 'Concealed Talon', rarity: 4, type: 'common-asc' },
    /* common-asc mats end */

    /* local spec mats start */
    // Mondstadt
    { id: 'calla_lily', name: 'Calla Lily', rarity: 1, type: 'local-mats' },
    { id: 'cecilia', name: 'Cecilia', rarity: 1, type: 'local-mats' },
    { id: 'dandelion_seed', name: 'Dandelion Seed', rarity: 1, type: 'local-mats' },
    { id: 'philanemo_mushroom', name: 'Philanemo Mushroom', rarity: 1, type: 'local-mats' },
    { id: 'small_lamp_grass', name: 'Small Lamp Grass', rarity: 1, type: 'local-mats' },
    { id: 'valberry', name: 'Valberry', rarity: 1, type: 'local-mats' },
    { id: 'windwheel_aster', name: 'Windwheel Aster', rarity: 1, type: 'local-mats' },
    { id: 'wolfhook', name: 'Wolfhook', rarity: 1, type: 'local-mats' },
    // Liyue
    { id: 'cor_lapis', name: 'Cor Lapis', rarity: 1, type: 'local-mats' },
    { id: 'glaze_lily', name: 'Glaze Lily', rarity: 1, type: 'local-mats' },
    { id: 'jueyun_chili', name: 'Jueyun Chili', rarity: 1, type: 'local-mats' },
    { id: 'noctilucous_jade', name: 'Noctilucous Jade', rarity: 1, type: 'local-mats' },
    { id: 'qingxin', name: 'Qingxin', rarity: 1, type: 'local-mats' },
    { id: 'silk_flower', name: 'Silk Flower', rarity: 1, type: 'local-mats' },
    { id: 'starconch', name: 'Starconch', rarity: 1, type: 'local-mats' },
    { id: 'violetgrass', name: 'Violetgrass', rarity: 1, type: 'local-mats' },
    // Inazuma
    { id: 'amakumo_fruit', name: 'Amakumo Fruit', rarity: 1, type: 'local-mats' },
    { id: 'crystal_marrow', name: 'Crystal Marrow', rarity: 1, type: 'local-mats' },
    { id: 'dendrobium', name: 'Dendrobium', rarity: 1, type: 'local-mats' },
    { id: 'fluorescent_fungus', name: 'Fluorescent Fungus', rarity: 1, type: 'local-mats' },
    { id: 'naku_weed', name: 'Naku Weed', rarity: 1, type: 'local-mats' },
    { id: 'onikabuto', name: 'Onikabuto', rarity: 1, type: 'local-mats' },
    { id: 'sakura_bloom', name: 'Sakura Bloom', rarity: 1, type: 'local-mats' },
    { id: 'sango_pearl', name: 'Sango Pearl', rarity: 1, type: 'local-mats' },
    { id: 'sea_ganoderma', name: 'Sea Ganoderma', rarity: 1, type: 'local-mats' },
    /* local spec mats end */

    /* weapon asc mats start */
    {
      id: 'fetters_of_the_dandelion_gladiator',
      name: 'Fetters of the Dandelion Gladiator',
      day: ['wednesday', 'saturday'],
      rarity: 2, type: 'weapon-asc',
    },
    {
      id: 'chains_of_the_dandelion_gladiator',
      name: 'Chains of the Dandelion Gladiator',
      day: ['wednesday', 'saturday'],
      rarity: 3,
      parent: 'fetters_of_the_dandelion_gladiator', type: 'weapon-asc',
    },
    {
      id: 'shackles_of_the_dandelion_gladiator',
      name: 'Shackles of the Dandelion Gladiator',
      day: ['wednesday', 'saturday'],
      rarity: 4,
      parent: 'fetters_of_the_dandelion_gladiator', type: 'weapon-asc',
    },
    {
      id: 'dream_of_the_dandelion_gladiator',
      name: 'Dream of the Dandelion Gladiator',
      day: ['wednesday', 'saturday'],
      rarity: 5,
      parent: 'fetters_of_the_dandelion_gladiator', type: 'weapon-asc',
    },
    {
      id: 'tile_of_decarabians_tower',
      name: "Tile of Decarabian's Tower",
      day: ['monday', 'thursday'],
      rarity: 2, type: 'weapon-asc',
    },
    {
      id: 'debris_of_decarabians_city',
      name: "Debris of Decarabian's City",
      day: ['monday', 'thursday'],
      rarity: 3,
      parent: 'tile_of_decarabians_tower', type: 'weapon-asc',
    },
    {
      id: 'fragment_of_decarabians_epic',
      name: "Fragment of Decarabian's Epic",
      day: ['monday', 'thursday'],
      rarity: 4,
      parent: 'tile_of_decarabians_tower', type: 'weapon-asc',
    },
    {
      id: 'scattered_piece_of_decarabians_dream',
      name: "Scattered Piece of Decarabian's Dream",
      day: ['monday', 'thursday'],
      rarity: 5,
      parent: 'tile_of_decarabians_tower', type: 'weapon-asc',
    },
    {
      id: 'boreal_wolfs_milk_tooth',
      name: "Boreal Wolf's Milk Tooth",
      day: ['tuesday', 'friday'],
      rarity: 2, type: 'weapon-asc',
    },
    {
      id: 'boreal_wolfs_cracked_tooth',
      name: "Boreal Wolf's Cracked Tooth",
      day: ['tuesday', 'friday'],
      rarity: 3,
      parent: 'boreal_wolfs_milk_tooth', type: 'weapon-asc',
    },
    {
      id: 'boreal_wolfs_broken_fang',
      name: "Boreal Wolf's Broken Fang",
      day: ['tuesday', 'friday'],
      rarity: 4,
      parent: 'boreal_wolfs_milk_tooth', type: 'weapon-asc',
    },
    {
      id: 'boreal_wolfs_nostalgia',
      name: "Boreal Wolf's Nostalgia",
      day: ['tuesday', 'friday'],
      rarity: 5,
      parent: 'boreal_wolfs_milk_tooth', type: 'weapon-asc',
    },
    {
      id: 'grain_of_aerosiderite',
      name: 'Grain of Aerosiderite',
      day: ['wednesday', 'saturday'],
      rarity: 2, type: 'weapon-asc',
    },
    {
      id: 'piece_of_aerosiderite',
      name: 'Piece of Aerosiderite',
      day: ['wednesday', 'saturday'],
      rarity: 3,
      parent: 'grain_of_aerosiderite', type: 'weapon-asc',
    },
    {
      id: 'bit_of_aerosiderite',
      name: 'Bit of Aerosiderite',
      day: ['wednesday', 'saturday'],
      rarity: 4,
      parent: 'grain_of_aerosiderite', type: 'weapon-asc',
    },
    {
      id: 'chunk_of_aerosiderite',
      name: 'Chunk of Aerosiderite',
      day: ['wednesday', 'saturday'],
      rarity: 5,
      parent: 'grain_of_aerosiderite', type: 'weapon-asc',
    },
    {
      id: 'mist_veiled_lead_elixir',
      name: 'Mist Veiled Lead Elixir',
      day: ['tuesday', 'friday'],
      rarity: 1, type: 'weapon-asc',
    },
    {
      id: 'mist_veiled_mercury_elixir',
      name: 'Mist Veiled Mercury Elixir',
      day: ['tuesday', 'friday'],
      rarity: 2,
      parent: 'mist_veiled_lead_elixir', type: 'weapon-asc',
    },
    {
      id: 'mist_veiled_gold_elixir',
      name: 'Mist Veiled Gold Elixir',
      day: ['tuesday', 'friday'],
      rarity: 3,
      parent: 'mist_veiled_lead_elixir', type: 'weapon-asc',
    },
    {
      id: 'mist_veiled_primo_elixir',
      name: 'Mist Veiled Primo Elixir',
      day: ['tuesday', 'friday'],
      rarity: 4,
      parent: 'mist_veiled_lead_elixir', type: 'weapon-asc',
    },
    {
      id: 'luminous_sands_from_guyun',
      name: 'Luminous Sands from Guyun',
      day: ['monday', 'thursday'],
      rarity: 1, type: 'weapon-asc',
    },
    {
      id: 'lustrous_stone_from_guyun',
      name: 'Lustrous Stone from Guyun',
      day: ['monday', 'thursday'],
      rarity: 2,
      parent: 'luminous_sands_from_guyun', type: 'weapon-asc',
    },
    {
      id: 'relic_from_guyun',
      name: 'Relic from Guyun',
      day: ['monday', 'thursday'],
      rarity: 3,
      parent: 'luminous_sands_from_guyun', type: 'weapon-asc',
    },
    {
      id: 'divine_body_from_guyun',
      name: 'Divine Body from Guyun',
      day: ['monday', 'thursday'],
      rarity: 4,
      parent: 'luminous_sands_from_guyun', type: 'weapon-asc',
    },
    {
      id: 'coral_branch_of_a_distant_sea',
      name: 'Coral Branch of div Distant Sea',
      day: ['monday', 'thursday'],
      rarity: 2, type: 'weapon-asc',
    },
    {
      id: 'jeweled_branch_of_a_distant_sea',
      name: 'Jeweled Branch of div Distant Sea',
      day: ['monday', 'thursday'],
      rarity: 3,
      parent: 'coral_branch_of_a_distant_sea', type: 'weapon-asc',
    },
    {
      id: 'jade_branch_of_a_distant_sea',
      name: 'Jade Branch of div Distant Sea',
      day: ['monday', 'thursday'],
      rarity: 4,
      parent: 'coral_branch_of_a_distant_sea', type: 'weapon-asc',
    },
    {
      id: 'golden_branch_of_a_distant_sea',
      name: 'Golden Branch of div Golden Sea',
      day: ['monday', 'thursday'],
      rarity: 5,
      parent: 'coral_branch_of_a_distant_sea', type: 'weapon-asc',
    },
    {
      id: 'narukamis_wisdom',
      name: "Narukami's Wisdom",
      day: ['tuesday', 'friday'],
      rarity: 2, type: 'weapon-asc',
    },
    {
      id: 'narukamis_joy',
      name: "Narukami's Joy",
      day: ['tuesday', 'friday'],
      rarity: 3,
      parent: 'narukamis_wisdom', type: 'weapon-asc',
    },
    {
      id: 'narukamis_affection',
      name: "Narukami's Affection",
      day: ['tuesday', 'friday'],
      rarity: 4,
      parent: 'narukamis_wisdom', type: 'weapon-asc',
    },
    {
      id: 'narukamis_valor',
      name: "Narukami's Valor",
      day: ['tuesday', 'friday'],
      rarity: 5,
      parent: 'narukamis_wisdom', type: 'weapon-asc',
    },
    {
      id: 'mask_of_the_wicked_lieutenant',
      name: 'Mask of the Wicked Lieutenant',
      day: ['wednesday', 'saturday'],
      rarity: 2, type: 'weapon-asc',
    },
    {
      id: 'mask_of_the_tigers_bite',
      name: "Mask of the Tiger's Bite",
      day: ['wednesday', 'saturday'],
      rarity: 3,
      parent: 'mask_of_the_wicked_lieutenant', type: 'weapon-asc',
    },
    {
      id: 'mask_of_the_one_horned',
      name: 'Mask of the One-Horned',
      day: ['wednesday', 'saturday'],
      rarity: 4,
      parent: 'mask_of_the_wicked_lieutenant', type: 'weapon-asc',
    },
    {
      id: 'mask_of_the_kijin',
      name: 'Mask of the Kijin',
      day: ['wednesday', 'saturday'],
      rarity: 5,
      parent: 'mask_of_the_wicked_lieutenant', type: 'weapon-asc',
    },
    /* weapon asc mats end */

    /* talent books start here */
    {
      id: 'teachings_of_freedom',
      name: 'Teachings of Freedom',
      day: ['monday', 'thursday'],
      rarity: 2, type: 'talent-book',
    },
    {
      id: 'guide_to_freedom',
      name: 'Guide to Freedom',
      day: ['monday', 'thursday'],
      rarity: 3,
      parent: 'teachings_of_freedom', type: 'talent-book',
    },
    {
      id: 'philosophies_of_freedom',
      name: 'Philosophies of Freedom',
      day: ['monday', 'thursday'],
      rarity: 4,
      parent: 'teachings_of_freedom', type: 'talent-book',
    },
    {
      id: 'teachings_of_resistance',
      name: 'Teachings of Resistance',
      day: ['tuesday', 'friday'],
      rarity: 2, type: 'talent-book',
    },
    {
      id: 'guide_to_resistance',
      name: 'Guide to Resistance',
      day: ['tuesday', 'friday'],
      rarity: 3,
      parent: 'teachings_of_resistance', type: 'talent-book',
    },
    {
      id: 'philosophies_of_resistance',
      name: 'Philosophies of Resistance',
      day: ['tuesday', 'friday'],
      rarity: 4,
      parent: 'teachings_of_resistance', type: 'talent-book',
    },
    {
      id: 'teachings_of_ballad',
      name: 'Teachings of Ballad',
      day: ['wednesday', 'saturday'],
      rarity: 2, type: 'talent-book',
    },
    {
      id: 'guide_to_ballad',
      name: 'Guide to Ballad',
      day: ['wednesday', 'saturday'],
      rarity: 3,
      parent: 'teachings_of_ballad', type: 'talent-book',
    },
    {
      id: 'philosophies_of_ballad',
      name: 'Philosophies of Ballad',
      day: ['wednesday', 'saturday'],
      rarity: 4,
      parent: 'teachings_of_ballad', type: 'talent-book',
    },
    {
      id: 'teachings_of_prosperity',
      name: 'Teachings of Prosperity',
      day: ['monday', 'thursday'],
      rarity: 2, type: 'talent-book',
    },
    {
      id: 'guide_to_prosperity',
      name: 'Guide to Prosperity',
      day: ['monday', 'thursday'],
      rarity: 3,
      parent: 'teachings_of_prosperity', type: 'talent-book',
    },
    {
      id: 'philosophies_of_prosperity',
      name: 'Philosophies of Prosperity',
      day: ['monday', 'thursday'],
      rarity: 4,
      parent: 'teachings_of_prosperity', type: 'talent-book',
    },
    {
      id: 'teachings_of_diligence',
      name: 'Teachings of Diligence',
      day: ['tuesday', 'friday'],
      rarity: 2, type: 'talent-book',
    },
    {
      id: 'guide_to_diligence',
      name: 'Guide to Diligence',
      day: ['tuesday', 'friday'],
      rarity: 3,
      parent: 'teachings_of_diligence', type: 'talent-book',
    },
    {
      id: 'philosophies_of_diligence',
      name: 'Philosophies of Diligence',
      day: ['tuesday', 'friday'],
      rarity: 4,
      parent: 'teachings_of_diligence', type: 'talent-book',
    },
    {
      id: 'teachings_of_gold',
      name: 'Teachings of Gold',
      day: ['wednesday', 'saturday'],
      rarity: 2, type: 'talent-book',
    },
    {
      id: 'guide_to_gold',
      name: 'Guide to Gold',
      day: ['wednesday', 'saturday'],
      rarity: 3,
      parent: 'teachings_of_gold', type: 'talent-book',
    },
    {
      id: 'philosophies_of_gold',
      name: 'Philosophies of Gold',
      day: ['wednesday', 'saturday'],
      rarity: 4,
      parent: 'teachings_of_gold', type: 'talent-book',
    },
    {
      id: 'teachings_of_transience',
      name: 'Teachings of Transience',
      day: ['monday', 'thursday'],
      rarity: 2, type: 'talent-book',
    },
    {
      id: 'guide_to_transience',
      name: 'Guide to Transience',
      day: ['monday', 'thursday'],
      rarity: 3,
      parent: 'teachings_of_transience', type: 'talent-book',
    },
    {
      id: 'philosophies_of_transience',
      name: 'Philosophies of Transience',
      day: ['monday', 'thursday'],
      rarity: 4,
      parent: 'teachings_of_transience', type: 'talent-book',
    },
    {
      id: 'teachings_of_elegance',
      name: 'Teachings of Elegance',
      day: ['tuesday', 'friday'],
      rarity: 2, type: 'talent-book',
    },
    {
      id: 'guide_to_elegance',
      name: 'Guide to Elegance',
      day: ['tuesday', 'friday'],
      rarity: 3,
      parent: 'teachings_of_elegance', type: 'talent-book',
    },
    {
      id: 'philosophies_of_elegance',
      name: 'Philosophies of Elegance',
      day: ['tuesday', 'friday'],
      rarity: 4,
      parent: 'teachings_of_elegance', type: 'talent-book',
    },
    {
      id: 'teachings_of_light',
      name: 'Teachings of Light',
      day: ['wednesday', 'saturday'],
      rarity: 2, type: 'talent-book',
    },
    {
      id: 'guide_to_light',
      name: 'Guide to Light',
      day: ['wednesday', 'saturday'],
      rarity: 3,
      parent: 'teachings_of_light', type: 'talent-book',
    },
    {
      id: 'philosophies_of_light',
      name: 'Philosophies of Light',
      day: ['wednesday', 'saturday'],
      rarity: 4,
      parent: 'teachings_of_light', type: 'talent-book',
    },
    /* talent books end */

    /* ascension gems start */
    {
      id: 'brilliant_diamond_sliver',
      name: 'Brilliant Diamond Sliver',
      rarity: 2, type: 'asc-gem',
    },
    {
      id: 'brilliant_diamond_fragment',
      name: 'Brilliant Diamond Fragment',
      rarity: 3,
      parent: 'brilliant_diamond_sliver', type: 'asc-gem',
    },
    {
      id: 'brilliant_diamond_chunk',
      name: 'Brilliant Diamond Chunk',
      rarity: 4,
      parent: 'brilliant_diamond_sliver', type: 'asc-gem',
    },
    {
      id: 'brilliant_diamond_gemstone',
      name: 'Brilliant Diamond Gemstone',
      rarity: 5,
      parent: 'brilliant_diamond_sliver', type: 'asc-gem',
    },
    {
      id: 'agnidus_agate_sliver',
      name: 'Agnidus Agate Sliver',
      rarity: 2, type: 'asc-gem',
    },
    {
      id: 'agnidus_agate_fragment',
      name: 'Agnidus Agate Fragment',
      rarity: 3,
      parent: 'agnidus_agate_sliver', type: 'asc-gem',
    },
    {
      id: 'agnidus_agate_chunk',
      name: 'Agnidus Agate Chunk',
      rarity: 4,
      parent: 'agnidus_agate_sliver', type: 'asc-gem',
    },
    {
      id: 'agnidus_agate_gemstone',
      name: 'Agnidus Agate Gemstone',
      rarity: 5,
      parent: 'agnidus_agate_sliver', type: 'asc-gem',
    },
    {
      id: 'varunada_lazurite_sliver',
      name: 'Varunada Lazurite Sliver',
      rarity: 2, type: 'asc-gem',
    },
    {
      id: 'varunada_lazurite_fragment',
      name: 'Varunada Lazurite Fragment',
      rarity: 3,
      parent: 'varunada_lazurite_sliver', type: 'asc-gem',
    },
    {
      id: 'varunada_lazurite_chunk',
      name: 'Varunada Lazurite Chunk',
      rarity: 4,
      parent: 'varunada_lazurite_sliver', type: 'asc-gem',
    },
    {
      id: 'varunada_lazurite_gemstone',
      name: 'Varunada Lazurite Gemstone',
      rarity: 5,
      parent: 'varunada_lazurite_sliver', type: 'asc-gem',
    },
    {
      id: 'vajrada_amethyst_sliver',
      name: 'Vajrada Amethyst Sliver',
      rarity: 2, type: 'asc-gem',
    },
    {
      id: 'vajrada_amethyst_fragment',
      name: 'Vajrada Amethyst Fragment',
      rarity: 3,
      parent: 'vajrada_amethyst_sliver', type: 'asc-gem',
    },
    {
      id: 'vajrada_amethyst_chunk',
      name: 'Vajrada Amethyst Chunk',
      rarity: 4,
      parent: 'vajrada_amethyst_sliver', type: 'asc-gem',
    },
    {
      id: 'vajrada_amethyst_gemstone',
      name: 'Vajrada Amethyst Gemstone',
      rarity: 5,
      parent: 'vajrada_amethyst_sliver', type: 'asc-gem',
    },
    {
      id: 'vayuda_turquoise_sliver',
      name: 'Vayuda Turquoise Sliver',
      rarity: 2, type: 'asc-gem',
    },
    {
      id: 'vayuda_turquoise_fragment',
      name: 'Vayuda Turquoise Fragment',
      rarity: 3,
      parent: 'vayuda_turquoise_sliver', type: 'asc-gem',
    },
    {
      id: 'vayuda_turquoise_chunk',
      name: 'Vayuda Turquoise Chunk',
      rarity: 4,
      parent: 'vayuda_turquoise_sliver', type: 'asc-gem',
    },
    {
      id: 'vayuda_turquoise_gemstone',
      name: 'Vayuda Turquoise Gemstone',
      rarity: 5,
      parent: 'vayuda_turquoise_sliver', type: 'asc-gem',
    },
    {
      id: 'shivada_jade_sliver',
      name: 'Shivada Jade Sliver',
      rarity: 2, type: 'asc-gem',
    },
    {
      id: 'shivada_jade_fragment',
      name: 'Shivada Jade Fragment',
      rarity: 3,
      parent: 'shivada_jade_sliver', type: 'asc-gem',
    },
    
    {
      id: 'shivada_jade_chunk',
      name: 'Shivada Jade Chunk',
      rarity: 4,
      parent: 'shivada_jade_sliver', type: 'asc-gem',
    },
    {
      id: 'shivada_jade_gemstone',
      name: 'Shivada Jade Gemstone',
      rarity: 5,
      parent: 'shivada_jade_sliver', type: 'asc-gem',
    },
    {
      id: 'prithiva_topaz_sliver',
      name: 'Prithiva Topaz Sliver',
      rarity: 2, type: 'asc-gem',
    },
    {
      id: 'prithiva_topaz_fragment',
      name: 'Prithiva Topaz Fragment',
      rarity: 3,
      parent: 'prithiva_topaz_sliver', type: 'asc-gem',
    },
    {
      id: 'prithiva_topaz_chunk',
      name: 'Prithiva Topaz Chunk',
      rarity: 4,
      parent: 'prithiva_topaz_sliver', type: 'asc-gem',
    },
    {
      id: 'prithiva_topaz_gemstone',
      name: 'Prithiva Topaz Gemstone',
      rarity: 5,
      parent: 'prithiva_topaz_sliver', type: 'asc-gem',
    },
    /* ascension gems end */

    /* ascension mats start */
    { id: 'hurricane_seed', name: 'Hurricane Seed', rarity: 4, type: 'asc-mats' },
    { id: 'lightning_prism', name: 'Lightning Prism', rarity: 4, type: 'asc-mats' },
    { id: 'basalt_pillar', name: 'Basalt Pillar', rarity: 4, type: 'asc-mats' },
    { id: 'hoarfrost_core', name: 'Hoarfrost Core', rarity: 4, type: 'asc-mats' },
    { id: 'everflame_seed', name: 'Everflame Seed', rarity: 4, type: 'asc-mats' },
    { id: 'cleansing_heart', name: 'Cleansing Heart', rarity: 4, type: 'asc-mats' },
    { id: 'juvenile_jade', name: 'Juvenile Jade', rarity: 4, type: 'asc-mats' },
    { id: 'crystalline_bloom', name: 'Crystalline Bloom', rarity: 4, type: 'asc-mats' },
    { id: 'marionette_core', name: 'Marionette Core', rarity: 4, type: 'asc-mats' },
    { id: 'perpetual_heart', name: 'Perpetual Heart', rarity: 4, type: 'asc-mats' },
    { id: 'smoldering_pearl', name: 'Smoldering Pearl', rarity: 4, type: 'asc-mats' },
    { id: 'dew_of_repudiation', name: 'Dew of Repudiation', rarity: 4, type: 'asc-mats' },
    { id: 'storm_beads', name: 'Storm Beads', rarity: 4, type: 'asc-mats' },
    { id: 'riftborn_regalia', name: 'Riftborn Regalia', rarity: 4, type: 'asc-mats' },
    { id: 'dragonheirs_false_fin',  name: "Dragonheir's False Fin",  rarity: 4, type: 'asc-mats' },
    /* ascension mats end */

    /* weekly boss drops start */
    { id: 'ring_of_boreas', name: 'Ring of Boreas', rarity: 5, type: 'weekly-drops' },
    { id: 'spirit_locket_of_boreas', name: 'Spirit Locket of Boreas', rarity: 5, type: 'weekly-drops' },
    { id: 'tail_of_boreas', name: 'Tail of Boreas', rarity: 5, type: 'weekly-drops' },
    { id: 'dvalins_sigh', name: "Dvalin's Sigh", rarity: 5, type: 'weekly-drops' },
    { id: 'dvalins_plume', name: "Dvalin's Plume", rarity: 5, type: 'weekly-drops' },
    { id: 'dvalins_claw', name: "Dvalin's Claw", rarity: 5, type: 'weekly-drops' },
    { id: 'tusk_of_monoceros_caeli', name: 'Tusk of Monoceros Caeli', rarity: 5, type: 'weekly-drops' },
    { id: 'shard_of_a_foul_legacy', name: 'Shard of div Foul Legacy', rarity: 5, type: 'weekly-drops' },
    { id: 'shadow_of_the_warrior', name: 'Shadow of the Warrior', rarity: 5, type: 'weekly-drops' },
    { id: 'bloodjade_branch', name: 'Bloodjade Branch', rarity: 5, type: 'weekly-drops' },
    { id: 'dragon_lords_crown', name: "Dragon Lord's Crown", rarity: 5, type: 'weekly-drops' },
    { id: 'gilded_scale', name: 'Gilded Scale', rarity: 5, type: 'weekly-drops' },
    { id: 'molten_moment', name: 'Molten Moment', rarity: 5, type: 'weekly-drops' },
    { id: 'ashen_heart', name: 'Ashen Heart', rarity: 5, type: 'weekly-drops' },
    { id: 'hellfire_butterfly', name: 'Hellfire Butterfly', rarity: 5, type: 'weekly-drops' },
    { id: 'the_meaning_of_aeons', name: 'The Meaning of Aeons', rarity: 5, type: 'weekly-drops' },
    { id: 'mudra_of_the_malefic_general', name: 'Mudra of the Malefic General', rarity: 5, type: 'weekly-drops' }, // does not exist yet from source
    { id: 'tears_of_the_calamitous_god', name: 'Tears of the Calamitous God', rarity: 5, type: 'weekly-drops' }, // does not exist yet from source
    
    /* weekly boss drops end */
];

parseArray()

function parseArray() {
    itemList.forEach( item => {
        if (item.id === "unknown" ||item.id === "none") {
          return
        }
        if (!((item.id === "mudra_of_the_malefic_general") || (item.id === "tears_of_the_calamitous_god"))) {
          determineRarity(item)
        }
        //displayLog(item.rarity)
    })
}

function determineRarity(item) {
    if (item.rarity === 1) {
        printCardsOne(item)
    }
    if (item.rarity === 2) {
        printCardsTwo(item)
    }
    if (item.rarity === 3) {
        printCardsThree(item)
    }
    if (item.rarity === 4) {
        printCardsFour(item)
    }
    if (item.rarity === 5) {
        printCardsFive(item)
    }
}

// Rarity-one weapons
function printCardsOne(item) {
    // Element to contain all weapon cards
    const container = document.getElementById("item-list")
    // Construct card and its content
    const card = document.createElement('div')

    card.classList = 'grid-cells'
    card.dataset.rarity = "one"
    card.dataset.type = item.type

    const content = `
    <div class="item-link" id="${item.id}" data-rarity-one data-item>
        <div class="character-portrait-container">
            <div class="character-image-container rank-one">
                <span class="character-icon">
                    <img src="https://paimon.moe/images/items/${item.id}.png" alt="" class="item-icon"> <!--Face Portrait-->
                </span>
                <div class="stars-container"> <!--Stars-->
                    <span class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <div class="nameplate">
                <span class="character-name">${item.name}</span>
            </div>
        </div>
    </div> 
    `;

    //Appending to parent html
    card.innerHTML += content
    container.append(card)
}
// Rarity-two weapons
function printCardsTwo(item) {
    // Element to contain all weapon cards
    const container = document.getElementById("item-list")
    // Construct card and its content
    const card = document.createElement('div')
    
    card.classList = 'grid-cells'
    card.dataset.rarity = "two"
    card.dataset.type = item.type

    const content = `
    <div class="item-link" id="${item.id}" data-rarity-two data-item>
        <div class="character-portrait-container">
            <div class="character-image-container rank-two">
                <span class="character-icon">
                    <img src="https://paimon.moe/images/items/${item.id}.png" alt="" class="item-icon"> <!--Face Portrait-->
                </span>
                <div class="stars-container"> <!--Stars-->
                    <span class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <div class="nameplate">
                <span class="character-name">${item.name}</span>
            </div>
        </div>
    </div> 
    `;

    //Appending to parent html
    card.innerHTML += content
    container.append(card)
}
// Rarity-three weapons
function printCardsThree(item) {
    // Element to contain all weapon cards
    const container = document.getElementById("item-list")
    // Construct card and its content
    const card = document.createElement('div')

    card.classList = 'grid-cells'
    card.dataset.rarity = "three"
    card.dataset.type = item.type

    const content = `
    <div class="item-link" id="${item.id}" data-rarity-three data-item>
        <div class="character-portrait-container">
            <div class="character-image-container rank-three">
                <span class="character-icon">
                    <img src="https://paimon.moe/images/items/${item.id}.png" alt="" class="item-icon"> <!--Face Portrait-->
                </span>
                <div class="stars-container"> <!--Stars-->
                    <span class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <div class="nameplate">
                <span class="character-name">${item.name}</span>
            </div>
        </div>
    </div> 
    `;

    //Appending to parent html
    card.innerHTML += content
    container.append(card)
}
// Rarity-four weapons
function printCardsFour(item) {
    // Element to contain all weapon cards
    const container = document.getElementById("item-list")
    // Construct card and its content
    const card = document.createElement('div')

    card.classList = 'grid-cells'
    card.dataset.rarity = "four"
    card.dataset.type = item.type

    const content = `
    <div class="item-link" id="${item.id}" data-rarity-four data-item>
        <div class="character-portrait-container">
            <div class="character-image-container rank-four">
                <span class="character-icon">
                    <img src="https://paimon.moe/images/items/${item.id}.png" alt="" class="item-icon"> <!--Face Portrait-->
                </span>
                <div class="stars-container"> <!--Stars-->
                    <span class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <div class="nameplate">
                <span class="character-name">${item.name}</span>
            </div>
        </div>
    </div> 
    `;

    //Appending to parent html
    card.innerHTML += content
    container.append(card)
}
// Rarity-five weapons
function printCardsFive(item) {
    // Element to contain all weapon cards
    const container = document.getElementById("item-list")
    // Construct card and its content
    const card = document.createElement('div');

    card.classList = 'grid-cells'
    card.dataset.rarity = "five"
    card.dataset.type = item.type

    const content = `
    <div class="item-link" id="${item.id}" data-rarity-five data-item>
        <div class="character-portrait-container">
            <div class="character-image-container rank-five">
                <span class="character-icon">
                    <img src="https://paimon.moe/images/items/${item.id}.png" alt="" class="item-icon"> <!--Face Portrait-->
                </span>
                <div class="stars-container"> <!--Stars-->
                    <span class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <div class="nameplate">
                <span class="character-name">${item.name}</span>
            </div>
        </div>
    </div> 
    `;

    //Appending to parent html
    card.innerHTML += content
    container.append(card)
}

function displayLog(msg) {
    console.log(msg)
}



