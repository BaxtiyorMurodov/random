let a = prompt(`salom 1 dan 10 gacha oraliqdagi sonni kiriting`)
let compSon = Math.trunc(Math.random()*10 + 1);

if (a == compSon) {
    alert (` qoyil sz tog'ri toptiz`);
}
else {
    alert(` uzur endi adashtiz  man ${compSon} sonni o'ylagandim`);
}