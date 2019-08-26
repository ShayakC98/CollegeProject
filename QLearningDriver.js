/*

Our Q learning model has 3 possible states:
Left, Middle, Right

Now for each state our model has 2 possible actions:
To go either Left, or To go either Right.

so the Shape of our Q-table will be of 3 x 2

		Left 	Middle 	Right
Left    [val 	val    	val
Right    val	val 	val]

The Update Rule for Q learning model:
Q[state, action] = Q[state, action] + lr * (reward + gamma * np.max(Q[new_state, :]) — Q[state, action])


*/

