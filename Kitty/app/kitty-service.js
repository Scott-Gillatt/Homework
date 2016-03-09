app.service('KittyService', function () {

var imgRoot = 'assets/img/'

function Kitty() {
    this.kittys = [{
        title: 'alfred',
        url: imgRoot + 'kitty1.png',
    }, {
            title: 'bobby',
            url: imgRoot + 'kitty2.png',
        }, {
            title: 'catness',
            url: imgRoot + 'kitty3.png',
        }, {
            title: 'dogless',
            url: imgRoot + 'kitty4.png',
        }, {
            title: 'elfred',
            url: imgRoot + 'kitty5.png',
        }, {
            title: 'fredrick',
            url: imgRoot + 'kitty6.png',
        }, {
            title: 'jago',
            url: imgRoot + 'kitty7.png',
        }, {
            title: 'golem',
            url: imgRoot + 'kitty8.png',
        }, {
            title: 'hiknee',
            url: imgRoot + 'kitty9.png',
        }, {
            title: 'igor',
            url: imgRoot + 'kitty10.png',
        },
        {
            title: 'kayo',
            url: imgRoot + 'kitty11.png',
        },
         {
            title: 'leroy',
            url: imgRoot + 'kitty12.png',
        },
         {
            title: 'maddie',
            url: imgRoot + 'kitty13.png',
        },
        {
            title: 'nala',
            url: imgRoot + 'kitty14.png',
        },
        {
            title: 'odin',
            url: imgRoot + 'kitty15.png',
        },
        {
            title: 'paladin',
            url: imgRoot + 'kitty16.png',
        },
        {
            title: 'quincy',
            url: imgRoot + 'kitty17.png',
        },
        {
            title: 'ralph',
            url: imgRoot + 'kitty18.png',
        },
        {
            title: 'sahib',
            url: imgRoot + 'kitty19.png',
        },
        {
            title: 'teeny',
            url: imgRoot + 'kitty19.png',
        },];
}
        
        this.getKitty = function () {
 
            
		var pairs = shuffle(new Kitty().kittys);

		return pairs;
	}
    
    function shuffle(Kitty) {
		for (var j, x, i = Kitty.length; i; j = Math.floor(Math.random() * i), x = Kitty[--i], Kitty[i] = Kitty[j], Kitty[j] = x);
		return Kitty;
	}
})