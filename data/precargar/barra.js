document.addEventListener("DOMContentLoaded", () => {
  const basecss   = "../css/barra/";
  const basemedia = "../media/barra/";

  const recursos = [
    basecss   + "barra.css",
    basecss   + "licores.css",
    basecss   + "ver_carta_completa.css",

    basemedia + "bebidas/agua.jpg",
    basemedia + "bebidas/agua_tonica_mil976_cero_calorias.jpg",
    basemedia + "bebidas/agua_tonica_mil976_indi.jpg",
    basemedia + "bebidas/agua_tonica_mil976_ocean.jpg",
    basemedia + "bebidas/agua_tonica_mil976_pink.jpg",
    basemedia + "bebidas/canada_dry.jpg",
    basemedia + "bebidas/cerveza_corona.jpg",
    basemedia + "bebidas/cerveza_heineken.jpg",
    basemedia + "bebidas/cerveza_sol.jpg",
    basemedia + "bebidas/cerveza_stella_artois.jpg",
    basemedia + "bebidas/drinko_mora_azul.jpg",
    basemedia + "bebidas/drinko_naranja.jpg",
    basemedia + "bebidas/drinko_water_melon.jpg",
    basemedia + "bebidas/electrolit_fresa.jpg",
    basemedia + "bebidas/electrolit_fresa_kiwi.jpg",
    basemedia + "bebidas/electrolit_maracuya.jpg",
    basemedia + "bebidas/electrolit_mora_azul.jpg",
    basemedia + "bebidas/electrolit_ponche_frutas.jpg",
    basemedia + "bebidas/electrolit_uva.jpg",
    basemedia + "bebidas/gatorade_blue_ice.jpg",
    basemedia + "bebidas/gatorade_frutas_tropicales.jpg",
    basemedia + "bebidas/gatorade_mandarina.jpg",
    basemedia + "bebidas/gatorade_maracuya.jpg",
    basemedia + "bebidas/gatorade_sin_azucar_fresa_kiwi.jpg",
    basemedia + "bebidas/gatorade_sin_azucar_naranja.jpg",
    basemedia + "bebidas/jarra_de_arandano.jpg",
    basemedia + "bebidas/jarra_de_naranja.jpg",
    basemedia + "bebidas/pepsi.jpg",
    basemedia + "bebidas/red_bull_energy_drink.jpg",
    basemedia + "bebidas/red_bull_sugarfree.jpg",
    basemedia + "bebidas/red_bull_zero.jpg",
    basemedia + "bebidas/smirnoff_ice_green_apple_personal.jpg",
    basemedia + "bebidas/smirnoff_ice_original_personal.jpg",

    basemedia + "bitter/jagermeister.jpg",

    basemedia + "champagne/dom_perignon.jpg",
    basemedia + "champagne/krug_grande_cuvee_box.jpg",
    basemedia + "champagne/veuve_clicquot_brut.jpg",
    basemedia + "champagne/veuve_clicquot_rich.jpg",
    basemedia + "champagne/veuve_clicquot_rose.jpg",

    basemedia + "cocteles/cuba_libre.jpg",
    basemedia + "cocteles/daiquiri_de_fresa.jpg",
    basemedia + "cocteles/gin_and_tonic.jpg",
    basemedia + "cocteles/margarita.jpg",
    basemedia + "cocteles/mojito.jpg",
    basemedia + "cocteles/moscow_mule.jpg",
    basemedia + "cocteles/paloma.jpg",
    basemedia + "cocteles/pina_colada.jpg",
    basemedia + "cocteles/tequila_sunrise.jpg",

    basemedia + "cognac/hennessy_vs_cognac.jpg",

    basemedia + "ginebra/tanqueray_london_dry_gin.jpg",

    basemedia + "hookah/hookah_premium.jpg",
    basemedia + "hookah/hookah_vip.jpg",
    basemedia + "hookah/recarga_de_carbon.jpg",
    basemedia + "hookah/blueberry.jpg",
    basemedia + "hookah/cereza.jpg",
    basemedia + "hookah/doble_manzana.jpg",
    basemedia + "hookah/fresa.jpg",
    basemedia + "hookah/guayaba_melon.jpg",
    basemedia + "hookah/lady_killer.jpg",
    basemedia + "hookah/love_66.jpg",
    basemedia + "hookah/magic_love.jpg",
    basemedia + "hookah/maracuya.jpg",
    basemedia + "hookah/menta.jpg",
    basemedia + "hookah/menta_blueberry.jpg",
    basemedia + "hookah/menta_lima.jpg",
    basemedia + "hookah/sandia.jpg",
    basemedia + "hookah/tropical.jpg",
    basemedia + "hookah/uva.jpg",

    basemedia + "mezcal/400_conejos.jpg",

    basemedia + "nacional/aguardiente_amarillo_botella.jpg",
    basemedia + "nacional/aguardiente_amarillo_garrafa.jpg",
    basemedia + "nacional/aguardiente_antioqueno_tapa_azul_botella.jpg",
    basemedia + "nacional/aguardiente_antioqueno_tapa_azul_garrafa.jpg",
    basemedia + "nacional/aguardiente_antioqueno_tapa_verde_botella.jpg",
    basemedia + "nacional/aguardiente_antioqueno_tapa_verde_garrafa.jpg",
    basemedia + "nacional/ron_viejo_de_caldas_15_anos_botella.jpg",
    basemedia + "nacional/ron_viejo_de_caldas_3_anos_botella.jpg",
    basemedia + "nacional/ron_viejo_de_caldas_8_anos_botella.jpg",
    basemedia + "nacional/ron_viejo_de_caldas_esencial_botella.jpg",
    basemedia + "nacional/ron_viejo_de_caldas_esencial_garrafa.jpg",
    basemedia + "nacional/ron_viejo_de_caldas_tradicional_garrafa.jpg",

    basemedia + "ron_premium/zacapa_centenario_23_anos.jpg",

    basemedia + "shots/shot_de_aguardiente.jpg",
    basemedia + "shots/shot_de_ron.jpg",
    basemedia + "shots/shot_de_tequila.jpg",
    basemedia + "shots/shot_de_whisky.jpg",

    basemedia + "tequila/1800_anejo.jpg",
    basemedia + "tequila/1800_cristalino_anejo.jpg",
    basemedia + "tequila/1800_reposado.jpg",
    basemedia + "tequila/clase_azul_reposado.jpg",
    basemedia + "tequila/don_julio_1942.jpg",
    basemedia + "tequila/don_julio_70.jpg",
    basemedia + "tequila/don_julio_anejo.jpg",
    basemedia + "tequila/don_julio_blanco.jpg",
    basemedia + "tequila/don_julio_reposado.jpg",
    basemedia + "tequila/jose_cuervo_especial_reposado.jpg",
    basemedia + "tequila/jose_cuervo_tradicional_tapa_corcho.jpg",
    basemedia + "tequila/maestro_dobel_diamante.jpg",
  
    basemedia + "vino_espumoso/chandon_brut.jpg",
    basemedia + "vino_espumoso/chandon_delice.jpg",
    basemedia + "vino_espumoso/chandon_rose.jpg",
    basemedia + "vino_espumoso/jp_chenet_ice_rose.jpg",

    basemedia + "vodka/belvedere_pure.jpg",
    basemedia + "vodka/smirnoff_no_21_red.jpg",
    basemedia + "vodka/smirnoff_spicy_tamarind.jpg",

    basemedia + "whisky/buchanans_12_anos.jpg",
    basemedia + "whisky/buchanans_18_anos.jpg",
    basemedia + "whisky/buchanans_master.jpg",
    basemedia + "whisky/glenmorangie_original.jpg",
    basemedia + "whisky/glenmorangie_quinta_ruban.jpg",
    basemedia + "whisky/jack_daniels.jpg",
    basemedia + "whisky/johnnie_walker_black_label.jpg",
    basemedia + "whisky/johnnie_walker_blue_label.jpg",
    basemedia + "whisky/johnnie_walker_red_label.jpg",
    basemedia + "whisky/old_parr_12_anos.jpg"
  ];

  recursos.forEach(ruta => {
    const ext = ruta.split(".").pop();

    if (["jpg","jpeg","png","gif","webp"].includes(ext)) {
      const img = new Image();
      img.src = ruta;
    } else if (ext === "css") {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "style";
      link.href = ruta;
      document.head.appendChild(link);
    } else if (ext === "js") {
      const script = document.createElement("link");
      script.rel = "preload";
      script.as = "script";
      script.href = ruta;
      document.head.appendChild(script);
    }
  });
});
