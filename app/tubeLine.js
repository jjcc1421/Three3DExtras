/**
 * Instance a 3d line
 * @param origin array[int, int, int]
 * @param destination array[int, int, int]
 * @param weight double default 1
 * @paran color #hexColor default '#000'
 */
if (three3DExtras) {
    if (!three3DExtras.tubeLine) {
        three3DExtras.tubeLine = function (origin, destination, weight, color) {
            weight = weight ? weight : 1;
            color = color ? color : "#000";
            this.origin = origin;
            this.destination = destination;
            this.weight = weight;
            this.color = color;

        }
        three3DExtras.tubeLine.prototype.getObject3D = function () {
            var line = new THREE.CatmullRomCurve3([
                new THREE.Vector3(this.origin[0], this.origin[1], this.origin[2]),
                new THREE.Vector3(this.destination[0], this.destination[1], this.destination[2]),
            ]);
            var geometryTube = new THREE.TubeGeometry(
                line,  //path
                1,    //segments
                this.weight,     //radius
                8,     //radiusSegments
                false  //closed
                );
            var material = new THREE.MeshBasicMaterial({
                color: this.color,
                wireframe: false,
                transparent: true,
                //opacity:0.5
            });
            var object3d = new THREE.Mesh(geometryTube, material);
            return object3d;
        }
    }
}