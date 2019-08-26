/*

Our Q learning model has 3 possible states:
Left, Middle, Right

Now for each state our model has 3 possible actions:
To go either Left, or to go  Right, or to stay in current position

so the Shape of our Q-table will be of 3 x 3

		Left 	Middle 	Right
Left    [val 	val    	val
Stay     val	val 	val
Right    val	val 	val]

The Update Rule for Q learning model:
Q[state, action] = Q[state, action] + lr * (reward + gamma * max(Q[new_state, :]) — Q[state, action])

Learning Rate: lr or learning rate, often referred to as alpha or α, can simply be defined as how much you accept the new value vs the old value. Above we are taking the difference between new and old and then multiplying that value by the learning rate. This value then gets added to our previous q-value which essentially moves it in the direction of our latest update.

Gamma: gamma or γ is a discount factor. It’s used to balance immediate and future reward. From our update rule above you can see that we apply the discount to the future reward. Typically this value can range anywhere from 0.8 to 0.99.

Reward: reward is the value received after completing a certain action at a given state. A reward can happen at any given time step or only at the terminal time step.

Max: max() is taking the maximum of the future reward and applying it to the reward for the current state. What this does is impact the current action by the possible future reward. We’re allocating future reward to current actions to help the agent select the highest return action at any given state.

*/


// Basic initializations

Q_table = [[0, 0, 0],
		   [0, 0, 0],
		   [0, 0, 0]];

var lr = 0.01;
var epsilon = 0.2;
var gamma = 0.9;

function max(tab, state){
	max = tab[state][0];
	for(i = 0; i < tab[state].length; i++)
	{
		if(tab[state][i] > max){
			max = tab[state][i];
		}
	}
	return max;
}

/* 

Next part comprises of two parts:
1. Taking Action: Explore or Exploit
2. Updating the q-table

*/

// Step 1 : Explore and Exploit
function takeAction(){

}

// Step 2 : Updating the q-table
function updateQTable(){
	
}
