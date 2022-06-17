// Import libraries
import { File3dm, RhinoModule } from 'rhino3dm';
import * as THREE from 'three';

export async function loadRhinoFilesToScene(rhino: RhinoModule, doc: File3dm, material: THREE.Material, scene: THREE.Scene) { 

    //Initialize objects
    let objects = doc.objects()
    // @ts-ignore
    for (let i = 0; i < objects.count; i++) {
        // @ts-ignore
        let mesh = objects.get(i).geometry()
        if(mesh instanceof rhino.Mesh) {
            // convert all meshes in 3dm model into threejs objects
            let threeMesh = meshToThreejs(mesh, material)
            scene.add(threeMesh)
        }
    }
}

export async function get3dmFile(rhino: RhinoModule, file: string ) { 
    let res = await fetch(file)
    let buffer = await res.arrayBuffer()
    let arr = new Uint8Array(buffer)
    // @ts-ignore
    return rhino.File3dm.fromByteArray(arr)
}

function meshToThreejs(mesh: any, material: THREE.Material) {
    const loader = new THREE.BufferGeometryLoader()
    const geometry = loader.parse(mesh.toThreejsJSON())
    return new THREE.Mesh(geometry, material)
}