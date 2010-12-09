//Hyphenator_toggleBox.js
Hyphenator.addModule(new Hyphenator.fn.EO({
	toggleBox: function () {
		var contextWindow = window, myBox, bdy, myIdAttribute, myTextNode, myClassAttribute,
		text = (Hyphenator.doHyphenation ? 'Hy-phen-a-tion' : 'Hyphenation');
		if (!!(myBox = contextWindow.document.getElementById('HyphenatorToggleBox'))) {
			myBox.firstChild.data = text;
		} else {
			bdy = contextWindow.document.getElementsByTagName('body')[0];
			myBox = Hyphenator.fn.createElem('div', contextWindow);
			myIdAttribute = contextWindow.document.createAttribute('id');
			myIdAttribute.nodeValue = 'HyphenatorToggleBox';
			myClassAttribute = contextWindow.document.createAttribute('class');
			myClassAttribute.nodeValue = Hyphenator.dontHyphenateClass;
			myTextNode = contextWindow.document.createTextNode(text);
			myBox.appendChild(myTextNode);
			myBox.setAttributeNode(myIdAttribute);
			myBox.setAttributeNode(myClassAttribute);
			myBox.onclick =  Hyphenator.toggleHyphenation;
			myBox.style.position = 'absolute';
			myBox.style.top = '0px';
			myBox.style.right = '0px';
			myBox.style.margin = '0';
			myBox.style.backgroundColor = '#AAAAAA';
			myBox.style.color = '#FFFFFF';
			myBox.style.font = '6pt Arial';
			myBox.style.letterSpacing = '0.2em';
			myBox.style.padding = '3px';
			myBox.style.cursor = 'pointer';
			myBox.style.WebkitBorderBottomLeftRadius = '4px';
			myBox.style.MozBorderRadiusBottomleft = '4px';
			bdy.appendChild(myBox);
		}
	}
}));

Hyphenator.addModule(new Hyphenator.fn.EO({
	toggleHyphenation: function () {
		if (Hyphenator.doHyphenation) {
			Hyphenator.doHyphenation = false;
			Hyphenator.fn.removeHyphenationFromDocument();
			//storeConfiguration();
			Hyphenator.toggleBox();
		} else {
			Hyphenator.doHyphenation = true;
			Hyphenator.fn.rehyphenateDocument();
			//storeConfiguration();
			Hyphenator.toggleBox();
		}
	}
}));