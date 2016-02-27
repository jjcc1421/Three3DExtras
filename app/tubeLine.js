/**
 * Instance a 3d line
 * @param origin array[int, int, int]
 * @param destination array[int, int, int]
 * @param weight double default 1
 * @paran color #hexColor default '#000'
 */
if (three3DExtras) {
    if (three3DExtras.tubeLine) {
        three3DExtras.prototype.tubeLine = function (origin, destination, weight, color) {
            weight = weight ? 1 : weight;
            color = color ? "#000" : color;
            this.origin = origin;
            this.destination = destination;
            this.weight = weight;
            this.color = color;
            this.getObject3D = function () {
                var line = new THREE.CatmullRomCurve3([
                    new THREE.Vector3(origin[0], origin[1], origin[2]),
                    new THREE.Vector3(destination[0], destination[1], destination[2]),
                ]);
                var geometryTube = new THREE.TubeGeometry(
                    line,  //path
                    1,    //segments
                    weight,     //radius
                    8,     //radiusSegments
                    false  //closed
                    );
                var material = new THREE.MeshBasicMaterial({
                    color: color,
                    wireframe: false,
                    transparent: true,
                    //opacity:0.5
                });
                var object3d = new THREE.Mesh(geometryTube, material);
                return object3d;
            }
        }
    }
}