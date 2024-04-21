/*自作配列ライブラリ
 * MineCraftのBlockを
 * "AlignColors.js"で使用するための関数
 *
 * pieceImgSize = {x:16, y:16};
 *
 * MCLPalette(num, angle)
 *
 * num =  -1:カラーパレット(地図用)
 *	   0:all_version
 *	  12:    ～1.12
 *	  13:1.13～1.15
 *	  16:1.16
 *	  17:1.17
 *
 * angle = 0:all_angle
 *	   1:地上絵
 *	   2:壁絵
*/

const MCLP_Wool = [
	"./MCimg/white_wool.png",
	"./MCimg/light_gray_wool.png",
	"./MCimg/gray_wool.png",
	"./MCimg/black_wool.png",
	"./MCimg/brown_wool.png",
	"./MCimg/red_wool.png",
	"./MCimg/orange_wool.png",
	"./MCimg/yellow_wool.png",
	"./MCimg/lime_wool.png",
	"./MCimg/green_wool.png",
	"./MCimg/cyan_wool.png",
	"./MCimg/light_blue_wool.png",
	"./MCimg/blue_wool.png",
	"./MCimg/purple_wool.png",
	"./MCimg/magenta_wool.png",
	"./MCimg/pink_wool.png"
];
const MCLP_Concrete_Powder = [
	"./MCimg/white_concrete_powder.png",
	"./MCimg/light_gray_concrete_powder.png",
	"./MCimg/gray_concrete_powder.png",
	"./MCimg/black_concrete_powder.png",
	"./MCimg/brown_concrete_powder.png",
	"./MCimg/red_concrete_powder.png",
	"./MCimg/orange_concrete_powder.png",
	"./MCimg/yellow_concrete_powder.png",
	"./MCimg/lime_concrete_powder.png",
	"./MCimg/green_concrete_powder.png",
	"./MCimg/cyan_concrete_powder.png",
	"./MCimg/light_blue_concrete_powder.png",
	"./MCimg/blue_concrete_powder.png",
	"./MCimg/purple_concrete_powder.png",
	"./MCimg/magenta_concrete_powder.png",
	"./MCimg/pink_concrete_powder.png"
];
const MCLP_Concrete = [
	"./MCimg/white_concrete.png",
	"./MCimg/light_gray_concrete.png",
	"./MCimg/gray_concrete.png",
	"./MCimg/black_concrete.png",
	"./MCimg/brown_concrete.png",
	"./MCimg/red_concrete.png",
	"./MCimg/orange_concrete.png",
	"./MCimg/yellow_concrete.png",
	"./MCimg/lime_concrete.png",
	"./MCimg/green_concrete.png",
	"./MCimg/cyan_concrete.png",
	"./MCimg/light_blue_concrete.png",
	"./MCimg/blue_concrete.png",
	"./MCimg/purple_concrete.png",
	"./MCimg/magenta_concrete.png",
	"./MCimg/pink_concrete.png"
];
const MCLP_HardenedClayStained = [
	"./MCimg/hardened_clay.png",
	"./MCimg/hardened_clay_stained_white.png",
	"./MCimg/hardened_clay_stained_silver.png",
	"./MCimg/hardened_clay_stained_gray.png",
	"./MCimg/hardened_clay_stained_black.png",
	"./MCimg/hardened_clay_stained_brown.png",
	"./MCimg/hardened_clay_stained_red.png",
	"./MCimg/hardened_clay_stained_orange.png",
	"./MCimg/hardened_clay_stained_yellow.png",
	"./MCimg/hardened_clay_stained_lime.png",
	"./MCimg/hardened_clay_stained_green.png",
	"./MCimg/hardened_clay_stained_cyan.png",
	"./MCimg/hardened_clay_stained_light_blue.png",
	"./MCimg/hardened_clay_stained_blue.png",
	"./MCimg/hardened_clay_stained_purple.png",
	"./MCimg/hardened_clay_stained_magenta.png",
	"./MCimg/hardened_clay_stained_pink.png"
];
const MCLP_GlazedTerracotta = [
	"./MCimg/white_glazed_terracotta.png",
	"./MCimg/light_gray_glazed_terracotta.png",
	"./MCimg/gray_glazed_terracotta.png",
	"./MCimg/black_glazed_terracotta.png",
	"./MCimg/brown_glazed_terracotta.png",
	"./MCimg/red_glazed_terracotta.png",
	"./MCimg/orange_glazed_terracotta.png",
	"./MCimg/yellow_glazed_terracotta.png",
	"./MCimg/lime_glazed_terracotta.png",
	"./MCimg/green_glazed_terracotta.png",
	"./MCimg/cyan_glazed_terracotta.png",
	"./MCimg/light_blue_glazed_terracotta.png",
	"./MCimg/blue_glazed_terracotta.png",
	"./MCimg/purple_glazed_terracotta.png",
	"./MCimg/magenta_glazed_terracotta.png",
	"./MCimg/pink_glazed_terracotta.png"
];
const MCLP_Shulker_Box = [
	"./MCimg/shulker_box_top.png",
	"./MCimg/shulker_box_white_top.png",
	"./MCimg/shulker_box_light_gray_top.png",
	"./MCimg/shulker_box_gray_top.png",
	"./MCimg/shulker_box_black_top.png",
	"./MCimg/shulker_box_brown_top.png",
	"./MCimg/shulker_box_red_top.png",
	"./MCimg/shulker_box_orange_top.png",
	"./MCimg/shulker_box_yellow_top.png",
	"./MCimg/shulker_box_lime_top.png",
	"./MCimg/shulker_box_green_top.png",
	"./MCimg/shulker_box_cyan_top.png",
	"./MCimg/shulker_box_light_blue_top.png",
	"./MCimg/shulker_box_blue_top.png",
	"./MCimg/shulker_box_purple_top.png",
	"./MCimg/shulker_box_magenta_top.png",
	"./MCimg/shulker_box_pink_top.png",
	"./MCimg/shulker_box_bottom.png",
	"./MCimg/shulker_box_white_bottom.png",
	"./MCimg/shulker_box_light_gray_bottom.png",
	"./MCimg/shulker_box_gray_bottom.png",
	"./MCimg/shulker_box_black_bottom.png",
	"./MCimg/shulker_box_brown_bottom.png",
	"./MCimg/shulker_box_red_bottom.png",
	"./MCimg/shulker_box_orange_bottom.png",
	"./MCimg/shulker_box_yellow_bottom.png",
	"./MCimg/shulker_box_lime_bottom.png",
	"./MCimg/shulker_box_green_bottom.png",
	"./MCimg/shulker_box_cyan_bottom.png",
	"./MCimg/shulker_box_light_blue_bottom.png",
	"./MCimg/shulker_box_blue_bottom.png",
	"./MCimg/shulker_box_purple_bottom.png",
	"./MCimg/shulker_box_magenta_bottom.png",
	"./MCimg/shulker_box_pink_bottom.png"
];
const MCLP_Stone = [
	"./MCimg/nether_brick.png",
	"./MCimg/red_netherbrick.png",
	"./MCimg/nether_wart_block.png",
	"./MCimg/magma_block.png",
	"./MCimg/endstone.png",
	"./MCimg/endstone_brick.png",
	"./MCimg/purpurblock.png",
	"./MCimg/purpurblock_pillar.png",
	"./MCimg/prismarine_brick.png",
	"./MCimg/prismarine_dark.png",
	"./MCimg/prismarine.png",
	"./MCimg/clay.png",
	"./MCimg/sand.png",
	"./MCimg/red_sand.png",
	"./MCimg/cobblestone.png",
	"./MCimg/stone.png",
	"./MCimg/stone_smooth.png",
	"./MCimg/stonebrick_carved.png",
	"./MCimg/stonebrick_cracked.png",
	"./MCimg/stonebrick_mossy.png",
	"./MCimg/stonebrick.png",
	"./MCimg/stone_diorite_smooth.png",
	"./MCimg/stone_andesite_smooth.png",
	"./MCimg/stone_granite_smooth.png"
];
const MCLP_Stone_w = [
	"./MCimg/sandstone_normal.png",
	"./MCimg/sandstone_cut.png",
	"./MCimg/red_sandstone_normal.png",
	"./MCimg/red_sandstone_cut.png"
];
const MCLP_Stone_Old = [
	"./MCimg/netherrack_old.png",
	"./MCimg/soulsand_old.png",
	"./MCimg/red_brick_old.png",
	"./MCimg/gravel_old.png",
	"./MCimg/cobblestone_mossy_old.png",
	"./MCimg/stone_diorite_old.png",
	"./MCimg/stone_andesite_old.png",
	"./MCimg/stone_granite_old.png"
];
const MCLP_Stone_13 = [
	"./MCimg/netherrack_new.png",
	"./MCimg/soulsand_new.png",
	"./MCimg/nether_warped_wart_block.png",
	"./MCimg/red_brick_new.png",
	"./MCimg/sandstone_smooth.png",
	"./MCimg/red_sandstone_smooth.png",
	"./MCimg/gravel_new.png",
	"./MCimg/cobblestone_mossy_new.png",
	"./MCimg/stone_diorite_new.png",
	"./MCimg/stone_andesite_new.png",
	"./MCimg/stone_granite_new.png"
];
const MCLP_Stone_16 = [
	"./MCimg/soulsoil.png",
	"./MCimg/basalt.png",
	"./MCimg/black_stone.png",
	"./MCimg/black_stonebrick.png",
	"./MCimg/black_stonebrick_cracked.png",
	"./MCimg/black_stonebrick_smooth.png",
	"./MCimg/nether_brick_cracked.png"
];
const MCLP_Stone_17 = [
	"./MCimg/deep_slate_cobblestone.png",
	"./MCimg/deep_slate_stonebrick.png",
	"./MCimg/deep_slate_stonebrick_cracked.png",
	"./MCimg/deep_slate_smooth.png",
	"./MCimg/dripstone_block.png",
	"./MCimg/tuff.png",
	"./MCimg/calcite.png"
];
const MCLP_Stone_17_g = [
	"./MCimg/deep_slate_top.png",
];
const MCLP_Stone_17_w = [
	"./MCimg/deep_slate_side.png",
	"./MCimg/deep_slate_cracked_side.png"
];
const MCLP_Log = [
	"./MCimg/log_oak.png",
	"./MCimg/log_birch.png",
	"./MCimg/log_spruce.png",
	"./MCimg/log_big_oak.png",
	"./MCimg/log_acacia.png",
	"./MCimg/log_jungle.png",
	"./MCimg/log_oak_stripped.png",
	"./MCimg/log_birch_stripped.png",
	"./MCimg/log_spruce_stripped.png",
	"./MCimg/log_big_oak_stripped.png",
	"./MCimg/log_acacia_stripped.png",
	"./MCimg/log_jungle_stripped.png",
	"./MCimg/planks_oak.png",
	"./MCimg/planks_birch.png",
	"./MCimg/planks_spruce.png",
	"./MCimg/planks_big_oak.png",
	"./MCimg/planks_acacia.png",
	"./MCimg/planks_jungle.png"
];
const MCLP_Log_16 = [
	"./MCimg/log_crimson.png",
	"./MCimg/log_warped.png",
	"./MCimg/log_crimson_stripped.png",
	"./MCimg/log_warped_stripped.png",
	"./MCimg/planks_crimson.png",
	"./MCimg/planks_warped.png"
];
const MCLP_Ore_Old = [
	"./MCimg/quartz_ore_old.png",
	"./MCimg/coal_ore_old.png",
	"./MCimg/iron_ore_old.png",
	"./MCimg/redstone_ore_old.png",
	"./MCimg/lapis_ore_old.png",
	"./MCimg/gold_ore_old.png",
	"./MCimg/emerald_ore_old.png",
	"./MCimg/diamond_ore_old.png"
];
const MCLP_Ore_13 = [
	"./MCimg/quartz_ore_new.png"
];
const MCLP_Ore_16 = [
	"./MCimg/nether_gold_ore.png",
	"./MCimg/black_stone_gold_ore.png"
];
const MCLP_Ore_16_g = [
	"./MCimg/ancient_debris_top.png"
];
const MCLP_Ore_16_w = [
	"./MCimg/ancient_debris_side.png"
];
const MCLP_Ore_17 = [
	"./MCimg/coal_ore_new.png",
	"./MCimg/copper_ore.png",
	"./MCimg/iron_ore_new.png",
	"./MCimg/redstone_ore_new.png",
	"./MCimg/lapis_ore_new.png",
	"./MCimg/gold_ore_new.png",
	"./MCimg/emerald_ore_new.png",
	"./MCimg/diamond_ore_new.png",
	"./MCimg/deep_coal_ore.png",
	"./MCimg/deep_copper_ore.png",
	"./MCimg/deep_iron_ore.png",
	"./MCimg/deep_redstone_ore.png",
	"./MCimg/deep_lapis_ore.png",
	"./MCimg/deep_gold_ore.png",
	"./MCimg/deep_emerald_ore.png",
	"./MCimg/deep_diamond_ore.png"
];
const MCLP_OreBlock = [
	"./MCimg/obsidian.png",
	"./MCimg/redstone_block.png",
	"./MCimg/lapis_block.png"
];
const MCLP_OreBlock_Old = [
	"./MCimg/quartz_block_old.png",
	"./MCimg/iron_block_old.png",
	"./MCimg/gold_block_old.png",
	"./MCimg/emerald_block_old.png",
	"./MCimg/diamond_block_old.png"
];
const MCLP_OreBlock_13 = [
	"./MCimg/crying_obsidian.png",
	"./MCimg/quartz_block_new.png",
	"./MCimg/quartz_pillar_top.png",
	"./MCimg/quartz_pillar_side.png",
	"./MCimg/quartz_smooth.png",
	"./MCimg/iron_block_new.png",
	"./MCimg/emerald_block_new.png",
	"./MCimg/diamond_block_new.png"
];
const MCLP_OreBlock_13_g = [
	"./MCimg/quartz_chiseled_top.png"
];
const MCLP_OreBlock_13_w = [
	"./MCimg/quartz_chiseled_side.png"
];
const MCLP_OreBlock_16 = [
	"./MCimg/netherite_block.png",
	"./MCimg/quartz_brick.png"
];
const MCLP_OreBlock_17 = [
	"./MCimg/copper_block.png",
	"./MCimg/copper_block_exposed.png",
	"./MCimg/copper_block_weathered.png",
	"./MCimg/copper_block_oxidized.png",
	"./MCimg/cut_copper_block.png",
	"./MCimg/cut_copper_block_exposed.png",
	"./MCimg/cut_copper_block_weathered.png",
	"./MCimg/cut_copper_block_oxidized.png",
	"./MCimg/raw_copper_block.png",
	"./MCimg/raw_iron_block.png",
	"./MCimg/raw_gold_block.png",
	"./MCimg/amethyst_block.png",
	"./MCimg/amethyst_budding_block.png"
];
const MCLP_Coral = [
	"./MCimg/coral_block_red.png",
	"./MCimg/coral_block_yellow.png",
	"./MCimg/coral_block_blue.png",
	"./MCimg/coral_block_magenta.png",
	"./MCimg/coral_block_pink.png",
	"./MCimg/dry_coral_block_red.png",
	"./MCimg/dry_coral_block_yellow.png",
	"./MCimg/dry_coral_block_blue.png",
	"./MCimg/dry_coral_block_magenta.png",
	"./MCimg/dry_coral_block_pink.png"
];
const MCLP_Nature = [
	"./MCimg/dirt.png",
	"./MCimg/coarse_dirt.png",
	"./MCimg/mushroom_block.png",
	"./MCimg/brown_mushroom_block.png"
];
const MCLP_Nature_Old = [
	"./MCimg/snow_block_old.png"
];
const MCLP_Nature_13 = [
	"./MCimg/snow_block_new.png",
	"./MCimg/packed_ice.png",
	"./MCimg/blue_ice.png"
];
const MCLP_Nature_13_g = [
	"./MCimg/bee_nest_top.png",
	"./MCimg/beehive_top.png"
];
const MCLP_Nature_13_w = [
	"./MCimg/bee_nest_side.png",
	"./MCimg/beehive_side.png"
];
const MCLP_Nature_17 = [
	"./MCimg/rooted_dirt.png",
	"./MCimg/moss_block.png",
	"./MCimg/powder_snow_block.png"
];
const MCLP_Other = [
	"./MCimg/melon_side.png",
	"./MCimg/hay_block_side.png",
	"./MCimg/hay_block_top.png",
	"./MCimg/glowstone.png",
	"./MCimg/sea_lantern.png",
	"./MCimg/tnt.png",
	"./MCimg/piston_head.png",
	"./MCimg/slime_block.png",
	"./MCimg/bookshelf.png",
	"./MCimg/bone_block_side.png",
	"./MCimg/bone_block_top.png"
];
const MCLP_Other_Old = [
	"./MCimg/redstone_lamp_old.png",
	"./MCimg/note_block_old.png",
	"./MCimg/sticky_piston_head_old.png",
	"./MCimg/piston_bottom_old.png",
	"./MCimg/sponge_block_old.png"
];
const MCLP_Other_13 = [
	"./MCimg/redstone_lamp_new.png",
	"./MCimg/note_block_new.png",
	"./MCimg/sticky_piston_head_new.png",
	"./MCimg/piston_bottom_new.png",
	"./MCimg/sponge_block_new.png",
	"./MCimg/honeycomb_block.png",
	"./MCimg/trapdoor_spruce.png",
	"./MCimg/trapdoor_birch.png",
	"./MCimg/trapdoor_big_ork.png"
];
const MCLP_Other_13_g = [
	"./MCimg/kelp_block_top.png"
];
const MCLP_Other_13_w = [
	"./MCimg/furnace_side.png",
	"./MCimg/kelp_block_side.png"
];
const MCLP_Other_16 = [
	"./MCimg/shroomlight.png",
	"./MCimg/target.png",
	"./MCimg/barrel_top.png",
	"./MCimg/barrel_side.png",
	"./MCimg/barrel_bottom.png"
];
const MCLP_Other_16_g = [
	"./MCimg/lodestone_top.png",
	"./MCimg/fletching_table_top.png",
	"./MCimg/smithing_table_top.png",
	"./MCimg/blast_furnace_top.png"
];
const MCLP_Other_16_w = [
	"./MCimg/composter_side.png",
	"./MCimg/lodestone_side.png",
	"./MCimg/blast_furnace_side.png",
	"./MCimg/smoker_side.png"
];
const MCLP_Special = [
	"./MCimg/bedrock.png",
	"./MCimg/command_block_bottom.png",
	"./MCimg/command_block_side.png",
	"./MCimg/command_chain_block_side.png",
	"./MCimg/command_repeating_block_side.png",
	"./MCimg/structure_block_data.png",
	"./MCimg/structure_block_corner.png",
	"./MCimg/structure_block_load.png",
	"./MCimg/structure_block_save.png",
	"./MCimg/jigsaw_block_top.png",
	"./MCimg/jigsaw_block_side.png",
	"./MCimg/jigsaw_block_bottom.png"
];
function MCLPalette(num = 0, angle = 0) {
	var Palette = [];
	if (num == -1) {
		Palette = [
			"7FB238",//草
			"F7E9A7",//砂
			"C7C7C7",//蜘蛛の巣
			"FF0000",//TNT
			"A0A0FF",//氷
			"A7A7A7",//鉄
			"007C00",//葉
			"FFFFFF",//雪
			"A4A8B8",//粘土
			"976D4D",//土
			"707070",//石
			"4040FF",//水
			"8F7748",//オーク
			"FFFCF5",//閃緑岩
			"D87F33",//橙色のコンクリート
			"B24CD8",//赤紫色のコンクリート
			"6699D8",//空色のコンクリート
			"E5E533",//黄色のコンクリート
			"7FCC19",//黄緑色のコンクリート
			"F27FA5",//桃色のコンクリート
			"4C4C4C",//灰色のコンクリート
			"999999",//薄灰色のコンクリート
			"4C7F99",//青緑色のコンクリート
			"7F3FB2",//紫色のコンクリート
			"334cb2",//青色のコンクリート
			"664C33",//茶色のコンクリート
			"667F33",//緑色のコンクリート
			"993333",//赤色のコンクリート
			"191919",//黒色のコンクリート
			"FAEE4D",//金
			"5CBDB5",//ダイヤ
			"4A80FF",//ラピスラズリ
			"00D93A",//エメラルド
			"815631",//松
			"7A0200",//ネザーラック
			"D1B1A1",//白色のテラコッタ
			"9F5224",//橙色のテラコッタ
			"95576C",//赤紫色のテラコッタ
			"706C8A",//空色のテラコッタ
			"BA8524",//黄色のテラコッタ
			"677535",//黄緑色のテラコッタ
			"A04D4E",//桃色のテラコッタ
			"392923",//灰色のテラコッタ
			"876B62",//薄灰色のテラコッタ
			"575C5C",//青緑色のテラコッタ
			"7A4958",//紫色のテラコッタ
			"4C3E5C",//青色のテラコッタ
			"4C3223",//茶色のテラコッタ
			"4C522A",//緑色のテラコッタ
			"8E3C2E",//赤色のテラコッタ
			"251610"//黒色のテラコッタ
		];
	}
	else
	{
		Palette = [
			...MCLP_Wool,
			...MCLP_Concrete_Powder,
			...MCLP_Concrete,
			...MCLP_HardenedClayStained,
			...MCLP_GlazedTerracotta,
			...MCLP_Shulker_Box,
			...MCLP_Stone,
			...MCLP_Log,
			...MCLP_OreBlock,
			...MCLP_Nature,
			...MCLP_Other
		];
		if (angle == 0 || angle == 1) {
			//Palette.push(...);
		}
		if (angle == 0 || angle == 2) {
			Palette.push(...MCLP_Stone_w);
		}
		switch (num) {
			case 0:
				Palette.push(...MCLP_Special);
			case 12:
				Palette = Palette.concat(
					MCLP_Stone_Old,
					MCLP_Ore_Old,
					MCLP_OreBlock_Old,
					MCLP_Nature_Old,
					MCLP_Other_Old
				);
			break;
			case 13:
			case 16:
				var MCLPOrOld = MCLP_Ore_Old;
				var idx = MCLPOrOld.indexOf("./MCimg/quartz_ore_old.png");
				if(idx >= 0) MCLPOrOld.splice(idx, 1); 
				Palette.push(...MCLPOrOld);
			break;
		}
		switch (num) {
			case 0:
			case 17:
				Palette = Palette.concat(
					MCLP_Stone_17,
					MCLP_Ore_17,
					MCLP_OreBlock_17,
					MCLP_Nature_17
				);
				if (angle == 0 || angle == 1) {
					Palette.push(...MCLP_Stone_17_g);
				}
				if (angle == 0 || angle == 2) {
					Palette.push(...MCLP_Stone_17_w);
				}
			case 16:
				Palette = Palette.concat(
					MCLP_Stone_16,
					MCLP_Log_16,
					MCLP_Ore_16,
					MCLP_OreBlock_16,
					MCLP_Coral,
					MCLP_Other_16
				);
				if (angle == 0 || angle == 1) {
					Palette.push(
						...MCLP_Ore_16_g,
						...MCLP_Other_16_g
					);
				}
				if (angle == 0 || angle == 2) {
					Palette.push(
						...MCLP_Ore_16_w,
						...MCLP_Other_16_w
					);
				}
			case 13:
				Palette = Palette.concat(
					MCLP_Stone_13,
					MCLP_Ore_13,
					MCLP_OreBlock_13,
					MCLP_Nature_13,
					MCLP_Other_13
				);
				if (angle == 0 || angle == 1) {
					Palette.push(
						...MCLP_OreBlock_13_g,
						...MCLP_Nature_13_g,
						...MCLP_Other_13_g
					);
				}
				if (angle == 0 || angle == 2) {
					Palette.push(
						...MCLP_OreBlock_13_w,
						...MCLP_Nature_13_w,
						...MCLP_Other_13_w
					);
				}
			break;
		}
	}
	return [...new Set(Palette)];
}