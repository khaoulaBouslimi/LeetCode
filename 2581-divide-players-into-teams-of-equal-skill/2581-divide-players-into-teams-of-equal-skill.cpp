class Solution {
public:
    long long dividePlayers(vector<int>& skill) {
        // Step 1: Sort the skill array
        sort(skill.begin(), skill.end());
        
        int n = skill.size();
        int targetSum = skill[0] + skill[n - 1];  // The sum each team must have
        long long totalChemistry = 0;  // Using long long to avoid overflow
        
        // Step 2: Form teams and calculate chemistry
        for (int i = 0; i < n / 2; ++i) {
            int teamSum = skill[i] + skill[n - i - 1];
            
            // Step 3: Check if the sum of each team is equal to targetSum
            if (teamSum != targetSum) {
                return -1;  // If the sum is not equal, return -1
            }
            
            // Step 4: Calculate the chemistry (product of skills)
            totalChemistry += static_cast<long long>(skill[i]) * skill[n - i - 1];
        }
        
        // Step 5: Return the total chemistry
        return totalChemistry;
   
    }
};