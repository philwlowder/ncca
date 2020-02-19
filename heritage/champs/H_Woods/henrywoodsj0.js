
var currM,currN,currB=0;
var index = 0;

var m2 = new Array(1)

var pieces = "KQNBR ";
var pos_after = "Position after ";
var start_pos = "Startposition ";
function g0(a,b)
{	gm(currM,currN,index,currB,'basePic',a,b);}
function MB_50()
{	with( rightDocument )
		if ( anchors[0] && anchors[0].name == 'zeroAnchor' )
		{		currB=MB_5(currM,currN,index,currB,'basePic');
		GMS(currM,currN,index,currB,'basePic');
		}
}
function MB0()
{	with( rightDocument )
		if ( anchors[0] && anchors[0].name == 'zeroAnchor' )
		{		currB=MB(currM,currN,index,currB,'basePic');
		GMS(currM,currN,index,currB,'basePic');
		}
}
function MF_50()
{	with( rightDocument )
		if ( anchors[0] && anchors[0].name == 'zeroAnchor' )
		{		currB=MF_5(currM,currN,index,currB,'basePic');
		GMS(currM,currN,index,currB,'basePic');
		}
}
function MF0(bVarWin)
{	with( rightDocument )
		if ( anchors[0] && anchors[0].name == 'zeroAnchor' )
		{		currB=MF(currM,currN,index,currB,'basePic',bVarWin);
		GMS(currM,currN,index,currB,'basePic');
		}
}
function GoEnd0()
{	with( rightDocument )
		if ( anchors[0] && anchors[0].name == 'zeroAnchor' )
		{		currB=GoEnd(currM,currN,index,currB,'basePic');
		GMS(currM,currN,index,currB,'basePic');
		}
}
function GoStart0()
{	with( rightDocument )
		if ( anchors[0] && anchors[0].name == 'zeroAnchor' )
		{		currB=GoStart(currM,currN,index,currB,'basePic');
		GMS(currM,currN,index,currB,'basePic');
		}
}
var nMoves = new Array(0,0);
var nLevels = new Array(0,0);
var nNameCount = new Array(0,0);
var nOld = new Array(-1,-1);
baseName = 'henrywoods';
var EmptyWhitePath = "gif/w.gif";
var EmptyBlackPath = "gif/b.gif";
var gifPath  = 'gif/';
var BackColor = "#FEFDE8";
var leftWindow		= parent.frames[0];
var rightWindow		= parent.frames[1];
var bFrames = 1;
var leftDocument		= leftWindow.document;
var rightDocument	= rightWindow.document;
