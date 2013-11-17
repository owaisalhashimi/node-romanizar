var fs = require('fs');
var path = require('path');
var opts = require('optimist');
var oTR = {};
	oTR.args = opts.argv;
	oTR.file = path.resolve(oTR.args["i"]);
	oTR.dirname = path.dirname(oTR.file);
	oTR.extname = path.extname(oTR.file);
	oTR.filename = path.basename(oTR.file,oTR.extname);
	oTR.outfilename = (oTR.args['o']) ? path.resolve(oTR.dirname,oTR.args['o']) : oTR.file.replace(oTR.filename,oTR.filename+'-romanized-ar');
	oTR.transliterate = function(oErr,sFc) {
		if (oErr) {
			throw(oErr);
		};
		var aPatterns = ['/AA/', '/aa/', '/EE/', '/ee/', '/OO/', '/oo/', '/DD/', '/dd/', '/HH/', '/hh/', '/SS/', '/ss/', '/TT/', '/tt/', '/ZZ/', '/zz/', '/cc/', '/,,/'];
		
		var aReplacements = ['&#256;', '&#257;', '&#298;', '&#299;', '&#362;', '&#363;', '&#7692;', '&#7693;', '&#7716;', '&#7717;', '&#7778;', '&#7779;', '&#7788;', '&#7789;', '&#7826;', '&#7827;', '&#703;', '&#702;'];

		aPatterns.forEach(function(sPattern,i){
			var sRegExp = new RegExp(sPattern,'g');
			 sFc = sFc.replace(sRegExp,aReplacements[i]);
		});

		fs.writeFile(oTR.outfilename,sFc,function(oErr){
			if (oErr){
				throw(oErr);
			};
			console.log('Romanized file saved: '+oTR.outfilename);
		});

	};
	oTR.read = function(){
		fs.readFile(oTR.file,'utf8',oTR.transliterate);
	};
module.exports = oTR;