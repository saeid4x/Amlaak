class Planet:

    #class level attribute
    shape='round'

    def __init__(self,name,age,gender):

        #instance Attribute
        self.name=name
        self.age=age
        self.gender=gender
        self.city='boj'

hoth=Planet('saeid',27,'male')
print(hoth.city)