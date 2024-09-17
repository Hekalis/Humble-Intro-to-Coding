class GameObject:

    def __init__(self, name, x_pos, y_pos):
        self.name= name
        self.x_pos = x_pos
        self.y_pos = y_pos

game_object = GameObject("Enemy", 1, 2)

name = game_object.name
print(game_object.name)
game_object.name = "Enemy 1"
print(game_object.name)

other_game_object = GameObject("Player", 2, 0)

# class GameObject:
    
#     # the initializer function
#     def __init__(self, name, x_pos, y_pos):
#         self.name = name
#         self.x_pos = x_pos
#         self.y_pos = y_pos

# # create a new game object
# game_object = GameObject("Enemy", 1, 2)
# # access the properties of the game object
# print(game_object.name)
# # change game object properties to new values
# game_object.name = "Enemy 1"
# print(game_object.name)