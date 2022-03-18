const div = dom.create('<div>ff</div>');
// console.log(div);


// dom.wrap(test, div);
// dom.attr(test, 'title', 'fzh')
// // var a = dom.attr(test, 'title')
// // console.log(a);
// dom.test(test, 'lianliandazi1111')
// var b = dom.test(test);
// console.log(b);

// dom.style(test, {
//     border: '1px solid red',
//     color: 'blue'
// })

// dom.class.add(test, 'red')
// console.log(dom.class.has(test, 'red'));

// var fn = () => {
//     console.log('点击了');
// }
// dom.on(test, 'click', fn);
// dom.off(test, 'click', fn);

// var e = document.querySelectorAll('#fzh')[0];
// console.log(e);

// var d = dom.find('#fzh', test)[0];
// console.log(d);

// console.log(dom.parent(fzh1));
// console.log(dom.children(test)[0]);

// console.log(dom.previous(fzh2));

const t = dom.find('#traverl')[0];
console.log(t);
dom.each(dom.children(t), (n) => {
    dom.style(n, 'color', 'red')
})

console.log(dom.index(fzh2));