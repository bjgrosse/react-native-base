# Project Overivew
## Idea
* Core Idea: Personalized daily affirmations app powered by an LLM
    * Affirmations uniquely tailored to individual goals, challenges, and priorities
    * Dynamically evolves as users update their goals and struggles or provides thoughts/feedback on generated affirmations
* Affirmation Scope
    * Addresses both immediate challenges and long-term aspirations
    * Covers specific needs such as goal achievement, mindset improvement, stress relief, self-esteem, confidence, and emotional regulation
* Customized Encouragement Style
    * Adapts tone and style to resonate personally with each user
* Reflective Feedback Loop
    * Encourages daily reflection through affirmation ratings or journaling
    * User feedback continuously refines and improves personalization
* Check-in Mechanism
    * Daily Check-in: Regular daily interaction to capture user's current state, goals, and challenges
    * Ad-hoc Check-in: Optional spontaneous interactions allowing users to update their status or seek immediate support outside the regular daily schedule

## Value Proposition
Get daily affirmations tailored to your personal goals, struggles, and priorities—keeping you inspired, motivated, and focused on what matters most to you.

Stay focused and inspired with daily affirmations uniquely crafted for your personal goals and challenges. The thoughtful AI carefully creates each day's message for you, evolving with your aspirations and challenges change. The unique morning check-in feature, encourages a life-changing habit of self-reflection while also helping the AI gain fresh insights to craft your unique affirmations.

## Mission Statement
Empowering individuals to pursue their goals and overcome challenges with personalized daily affirmations that inspire, motivate, and build self-belief.


## User Journey
### Onboarding
Onboarding → Initial Personalization → First affirmation

### Core product loop
1. Notification: check in to receive your daily message
2. Check-in: how are you feeling, what has you feeling that way, optional notes
3. Personalized Affirmation 


# Features

## 1. Login
- A user will log in or create account with Supabase authentication. 
- We'll support log in with Google, log in with Apple, or log in with email and a magic link. 

## 2. Onboarding
I'd like to try an onboarding flow that is basically a conversation. The AI agent will say, hello, what's your name? And then the user will answer with their name. And then the AI agent will say, tell me a little bit about yourself. And then the user will say some stuff. And then the agent will follow up with questions, whatever questions would help clarify the user and help get down to the goal. 

At the end of the conversation, we'll give the user an overview of how the app works. The user checks in, they get an affirmation, and then we'll say, "Let's try it now," and then they'll go through the flow. 

After receiving their first affirmation, we'll ask them about notification preferences. Like when would you want to receive a notification to check in? This would involve times per day and timing, morning, evening, et cetera. 

## 3. Check-in loop
This is the core product loop. The user will check in by describing their current feeling state and what they're feeling about and any notes and then the agent, the app will respond with a tailored affirmation for them. 

## 4. Notification system
This will be the technology for sending the notifications, the content of the notifications, and what happens when the user clicks on the notifications. 

## 5. Feedback
We want the user to have a way of giving feedback to affirmations like saying "Oh wow, I loved this" or "This didn't really work for me" and then explaining why. And then we'll use that information to refine the AI's behavior moving forward. 

## 6. History
We want a way for the user to view all past affirmations. We of course want to track their check-in information over time.

### 6.a Favoriting
I want the user to be able to heart, or like, or favorite an affirmation and have that go into a special category for easy review 

## 7. Sharing
We want the user to be able to easily share a motivation that resonated with them to any of their socials. 