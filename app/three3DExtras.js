/**
 * @author Juan Caicedo <jjcc1421@gmail.com>
 */
if (!three3DExtras) {
    var three3DExtras = {
        line: function (origin, destination, weight = 1, color = '#000') {
            this.origin = origin;
            this.destination = destination;
            this.weight = weight;
            this.color = color;
            this.object3D = function () {
                var bigLine = new THREE.CatmullRomCurve3([
                    new THREE.Vector3(parseInt(posOrigin[0]), parseInt(posOrigin[1]), parseInt(posOrigin[2])),
                    new THREE.Vector3(parseInt(posDest[0]), parseInt(posDest[1]), parseInt(posDest[2])),
                ]);
                return THREE;
            }
        }
    }
}