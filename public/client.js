import * as THREE from '../build/three.module.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';

let camera, scene, renderer;

init();
animate();

function init() {

    const container = document.createElement( 'div' );
    document.body.appendChild( container );

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.set( 0, 50, 350 );



    //--------Size-GEometry-Buffer-------

    const footColumn = new THREE.BoxBufferGeometry( 30, 10, 30 );
    const column = new THREE.CylinderBufferGeometry( 8, 10, 200, 0 );
    const stair3 = new THREE.BoxBufferGeometry( 400 , 15 , 200);
    const stair2 = new THREE.BoxBufferGeometry( 450 , 15 , 200);
    const stair1 = new THREE.BoxBufferGeometry( 500 , 15 , 200);
    const ceiling = new THREE.BoxBufferGeometry( 400 , 15 , 200);
    const wall = new THREE.BoxBufferGeometry( 130 , 250 , 15);
    const wallMiddleEntry = new THREE.BoxBufferGeometry( 140 , 50 , 15);
    const door = new THREE.BoxBufferGeometry( 140 , 160, 15);

    //---------DOOR-ENTRY------

    const textureDoor = new THREE.TextureLoader().load( 'textures/door.png' );
    const materialDoor = new THREE.MeshBasicMaterial( {map : textureDoor} );
    const doorEntry = new THREE.Mesh( door, materialDoor );
    doorEntry.position.z = -106;
    doorEntry.position.y = 85;

    
    scene.add( doorEntry );

    //---------Wall-ENTRY-LEFT------

    const textureWall = new THREE.TextureLoader().load( 'textures/32.jpg' );
    const materialWall = new THREE.MeshBasicMaterial( {map : textureWall} );
    const wallEntry = new THREE.Mesh( wall, materialWall );
    wallEntry.position.z = -106;
    wallEntry.position.y = 92;
    wallEntry.position.x = 135;

    
    scene.add( wallEntry );

    //---------Wall-ENTRY-RIGHT------

    const wallEntry1 = new THREE.Mesh( wall, materialWall );

    wallEntry1.position.z = -106;
    wallEntry1.position.y = 92;
    wallEntry1.position.x = -135;

    scene.add( wallEntry1 );

    //---------Wall-ENTRY-MIDDLE------

    const wallEntry2 = new THREE.Mesh( wallMiddleEntry, materialWall );
    wallEntry2.position.z = -106;
    wallEntry2.position.y = 190;

    scene.add( wallEntry2 );

    //---------CEILLING-ENTRY------

    const textureCelling = new THREE.TextureLoader().load( 'textures/32.jpg' );
    const materialCelling = new THREE.MeshBasicMaterial( {map : textureCelling} );
    const cellingEntry = new THREE.Mesh( ceiling, materialCelling );
    cellingEntry.position.y = 210;

    
    scene.add( cellingEntry );


    //-------- STAIR LEVEL 3------- 

    const textureStair = new THREE.TextureLoader().load( 'textures/paving.jpg' );
    const texturePaving = new THREE.MeshBasicMaterial( {map : textureStair} );
    const stairLevel3 = new THREE.Mesh( stair3, texturePaving );

    scene.add( stairLevel3 );

    //-------- STAIR LEVEL 2------- 

    const stairLevel2 = new THREE.Mesh( stair2, texturePaving );
    stairLevel2.position.z = 20;
    stairLevel2.position.y = -15;

    scene.add( stairLevel2 );

    //-------- STAIR LEVEL 1------- 

    const stairLevel1 = new THREE.Mesh( stair1, texturePaving );
    stairLevel1.position.z = 40;
    stairLevel1.position.y = -30;

    scene.add( stairLevel1 );



    // -------- PILLAR 1 -------




    // --------FOOTCOLUMN TOP-------

    const textureTopFoot = new THREE.TextureLoader().load( 'textures/32.jpg' );
    const materialTopFoot = new THREE.MeshBasicMaterial( {map : textureTopFoot} );
    const footTOP = new THREE.Mesh( footColumn, materialTopFoot );

    footTOP.position.y = 200;
    footTOP.position.z = 85;
    
    scene.add( footTOP );
    
    // --------FOOTCOlUMN BOT-------

    const footBot = new THREE.Mesh( footColumn, materialTopFoot );

    footBot.position.y = 12;
    footBot.position.z = 85;


    scene.add( footBot );

    
    
    // -------COLUMN-------
    
    const texture2 = new THREE.TextureLoader().load( 'textures/column.png' );
    const material3 = new THREE.MeshBasicMaterial( {map : texture2} );
    const cylinder = new THREE.Mesh( column, material3 );
    cylinder.position.y = 100 ;
    cylinder.position.z = 85;

    scene.add( cylinder );



    // -------- PILLAR 2 -------

    


    // --------FOOTCOLUMN TOP-------

    const footTop1 = new THREE.Mesh( footColumn, materialTopFoot );

    footTop1.position.y = 200;
    footTop1.position.z = 85;
    footTop1.position.x = 100;
    
    scene.add( footTop1 );
    
    // --------FOOTCOlUMN BOT-------

    const footBot1 = new THREE.Mesh( footColumn, materialTopFoot );

    footBot1.position.y = 12;
    footBot1.position.z = 85;
    footBot1.position.x = 100;


    scene.add( footBot1 );

    
    // -------COLUMN-------
    
    const column1 = new THREE.Mesh( column, material3 );

    column1.position.y = 100 ;
    column1.position.z = 85;
    column1.position.x = 100;

    scene.add( column1 );


    // -------- PILLAR 4 -------

    


    // --------FOOTCOLUMN TOP-------

    const footTop3 = new THREE.Mesh( footColumn, materialTopFoot );

    footTop3.position.y = 200;
    footTop3.position.z = 85;
    footTop3.position.x = -100;
    
    scene.add( footTop3 );
    
    // --------FOOTCOlUMN BOT-------

    const footBot3 = new THREE.Mesh( footColumn, materialTopFoot );

    footBot3.position.y = 12;
    footBot3.position.z = 85;
    footBot3.position.x = -100;


    scene.add( footBot3 );

    
    // -------COLUMN-------
    
    const column3 = new THREE.Mesh( column, material3 );

    column3.position.y = 100 ;
    column3.position.z = 85;
    column3.position.x = -100;

    scene.add( column3 );

    // -------- PILLAR 6 LEFT -------

    


    // --------FOOTCOLUMN TOP-------

    const footTop5 = new THREE.Mesh( footColumn, materialTopFoot );

    footTop5.position.y = 200;
    footTop5.position.z = 0;
    footTop5.position.x = -185;
    
    scene.add( footTop5 );
    
    // --------FOOTCOlUMN BOT-------

    const footBot5 = new THREE.Mesh( footColumn, materialTopFoot );

    footBot5.position.y = 12;
    footBot5.position.z = 0;
    footBot5.position.x = -185;


    scene.add( footBot5 );

    
    // -------COLUMN-------
    
    const column5 = new THREE.Mesh( column, material3 );

    column5.position.y = 100 ;
    column5.position.z = 0;
    column5.position.x = -185;

    scene.add( column5 );

    // -------- PILLAR 7 LEFT -------

    


    // --------FOOTCOLUMN TOP-------

    const footTop6 = new THREE.Mesh( footColumn, materialTopFoot );

    footTop6.position.y = 200;
    footTop6.position.z = -85;
    footTop6.position.x = -185;
    
    scene.add( footTop6 );
    
    // --------FOOTCOlUMN BOT-------

    const footBot6 = new THREE.Mesh( footColumn, materialTopFoot );

    footBot6.position.y = 12;
    footBot6.position.z = -85;
    footBot6.position.x = -185;


    scene.add( footBot6 );

    
    // -------COLUMN-------
    
    const column6 = new THREE.Mesh( column, material3 );

    column6.position.y = 100 ;
    column6.position.z = -85;
    column6.position.x = -185;

    scene.add( column6 );

    // -------- PILLAR 8 RIGHT -------

    


    // --------FOOTCOLUMN TOP-------

    const footTop7 = new THREE.Mesh( footColumn, materialTopFoot );

    footTop7.position.y = 200;
    footTop7.position.z = -85;
    footTop7.position.x = 185;
    
    scene.add( footTop7 );
    
    // --------FOOTCOlUMN BOT-------

    const footBot7 = new THREE.Mesh( footColumn, materialTopFoot );

    footBot7.position.y = 12;
    footBot7.position.z = -85;
    footBot7.position.x = 185;


    scene.add( footBot7 );

    
    // -------COLUMN-------
    
    const column7 = new THREE.Mesh( column, material3 );

    column7.position.y = 100 ;
    column7.position.z = -85;
    column7.position.x = 185;

    scene.add( column7 );

    // -------- PILLAR 9 RIGHT -------

    


    // --------FOOTCOLUMN TOP-------

    const footTop8 = new THREE.Mesh( footColumn, materialTopFoot );

    footTop8.position.y = 200;
    footTop8.position.z = 0;
    footTop8.position.x = 185;
    
    scene.add( footTop8 );
    
    // --------FOOTCOlUMN BOT-------

    const footBot8 = new THREE.Mesh( footColumn, materialTopFoot );

    footBot8.position.y = 12;
    footBot8.position.z = 0;
    footBot8.position.x = 185;


    scene.add( footBot8 );

    
    // -------COLUMN-------
    
    const column8 = new THREE.Mesh( column, material3 );

    column8.position.y = 100 ;
    column8.position.z = 0;
    column8.position.x = 185;

    scene.add( column8 );


    //---------CONTROL-PANEL--------

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );

    const controls = new OrbitControls( camera, renderer.domElement );
    controls.enableZoom = true;

    //

    window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}


function animate() {

    requestAnimationFrame( animate );

    render();
}

function render() {

    renderer.render( scene, camera );

}