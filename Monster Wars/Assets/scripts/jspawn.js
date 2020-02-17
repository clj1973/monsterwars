#pragma strict
var Text : UnityEngine.UI.Text;
var AttackText : UnityEngine.UI.Text;
var smon : GameObject;
var mmon : GameObject;
var lmon : GameObject;

var MyCanvas : CanvasGroup; 
  

var smonpos;
var mmonpos;
var lmonpos;


var speed : float = 0.00000001;

var smonhealth : int = 0;
var smoninthealth : int = 0;
var mmonhealth : int = 0;
var lmonhealth : int = 0;

var smonattack : int = 0;
var mmonattack : int = 0;
var lmonattack : int = 0;

var smonhealthbonus : int = 0;
var	smonattackbonus : int = 0;

var mmonhealthbonus : int = 0;
var	mmonattackbonus : int = 0;

var lmonhealthbonus : int = 0;
var	lmonattackbonus : int = 0;

var timer = 0.0;
var monsize;

function Awake ()
{
    
}

public function genstat()
{
		//Debug.Log ("roll mean stat");
		print ("roll mean stat");
	}

function spawn_smon()
{
smonpos = Vector3(-1.33,-2.0,0);
var temp_span_smon = Instantiate(smon, smonpos, Quaternion.identity);
}

function spawn_mmon()
{
mmonpos = Vector3(-1.566377,-1.195994,0);
var temp_span_mmon = Instantiate(mmon, mmonpos, Quaternion.identity);
}

function spawn_lmon()
{
lmonpos = Vector3(-1.253342,-0.7102492,0);
var temp_span_lmon = Instantiate(lmon, lmonpos, Quaternion.identity);
}




function Start () {

Awake ();
monsize = Random.Range (0,1);

if (monsize == 0) {
	smonhealth = Random.Range (1,4);
	smonattack = Random.Range (1,4);
	smonhealthbonus = Random.Range (1,1);
	smonattackbonus = Random.Range (1,1);
	
	print ("size " + monsize);
	print ("shealth " + smonhealth);
    print ("sattack " + smonattack);
    
    print ("shealth random " + smonhealthbonus);
    print ("sattack random " + smonattackbonus);
	
	
	
	if (smonhealthbonus == 1) {
	smonhealth++;
		print ("snew health " + smonhealth);
		}
		
		if (smonattackbonus == 1) {
	smonattack++;
		print ("snew attack " + smonattack);
		}
	
	Text.text= "Health: " + smonhealth;
	AttackText.text="Attack: "+ smonattack;
	
    spawn_smon();
    //MyCanvas.GetComponent(CanvasGroup).alpha = 1;
    //var MyCanvas : Canvas;// = Instantiate(Resources.Load("MyCanvas", Canvas));
 	MyCanvas.GetComponent(CanvasGroup).alpha = 1;
 	anim = GetComponent.<Animation>();
	
	// Make all animations in this character play at half speed
	for (var state : AnimationState in anim) {
		state.speed = 0.5;
	}

    
    
  
    
} else if (monsize == 1) {
	mmonhealth = Random.Range (2,5);
	mmonattack = Random.Range (2,5);
    mmonhealthbonus = Random.Range (0,41);
	mmonattackbonus = Random.Range (0,41);
    
    spawn_mmon();
    print ("size " + monsize);
    print ("health " + mmonhealth);
    print ("attack " + mmonattack);
    
} else if (monsize == 2){
	lmonhealth = Random.Range (4,7);
	lmonattack = Random.Range (4,7);
	lmonhealthbonus = Random.Range (0,61);
	lmonattackbonus = Random.Range (0,61);
	
    spawn_lmon();
    print ("size " + monsize);
    print ("health " + lmonhealth);
    print ("attack " + lmonattack);
    }

}

function Update () {
//timer += Time.deltaTime;
//if (timer < 3)
//{
//transform.position += transform.right / speed * Time.deltaTime;
//cancombat.alpha = 0;
//spawn_mmon();
//timer = 0.0;
//GetComponent<CanvasGroup>().alpha = 0;
MyCanvas.GetComponent(CanvasGroup).alpha = 1;
//transform.position += transform.right / speed * Time.deltaTime;
//}


}