/**
 * @author Juan Caicedo <jjcc1421@gmail.com>
 */
if (!three3DExtras) {
    var three3DExtras = {
        /**
         * Instance a 3d line
         * @param origin array[int, int, int]
         * @param destination array[int, int, int]
         * @param weight double
         * @oaran color #hexColor
         */
        tubeLine: function (origin, destination, weight = 1, color = '#000') {
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