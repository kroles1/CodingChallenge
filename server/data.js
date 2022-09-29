const dogs = [
    {
    id: 1, 
    url: 'www.pedigree.com.ph/dog-breeds/australian-shepherd', 
    breed: 'Australian Shepherd', 
    snippet: 'The Australian Shepherd is good-natured with an even disposition. It may be somewhat reserved when meeting people for the first time, but there should never be any display of shyness or aggression.', 
    link: 'https://www.pedigree.com.ph/dog-breeds/australian-shepherd',
    image: ["https://media.istockphoto.com/photos/little-girl-with-her-pet-at-the-veterinarians-office-picture-id1372104882?b=1&k=20&m=1372104882&s=170667a&w=0&h=o7riTQ6y5HI4lCz0e9XArGyOQLU1VTkTgpYk50vBNyk=","https://media.istockphoto.com/photos/little-girl-with-her-pet-at-the-veterinarians-office-picture-id1372104882?b=1&k=20&m=1372104882&s=170667a&w=0&h=o7riTQ6y5HI4lCz0e9XArGyOQLU1VTkTgpYk50vBNyk=","https://media.istockphoto.com/photos/purebred-german-shepherd-puppy-lies-on-the-sidewalk-against-a-wooden-picture-id1358309706?k=20&m=1358309706&s=612x612&w=0&h=BdBsa8qSeA2BMrlD6GX3q_HnmEvul5raD594ULygZ5k=","https://media.istockphoto.com/photos/german-shepherd-picture-id1220546837?k=20&m=1220546837&s=612x612&w=0&h=EV2m3PoiTN9FY5WDjEa8BmovsgOMscHb2FP9f-DA5gk=","https://media.istockphoto.com/photos/faithful-looking-mixed-breed-dog-picture-id1068303132?k=20&m=1068303132&s=612x612&w=0&h=0fEhA3_YdfSxn-lQLAXdyROHrpUEyX2UtLvdvemXJCk=","https://media.istockphoto.com/photos/puppy-german-shepherd-5-months-female-picture-id695560038?k=20&m=695560038&s=612x612&w=0&h=bX3r41zuWcsG3WbTt1UPXLYe9ex4FjKdDQTGEHRH5UI=","https://media.istockphoto.com/photos/puppy-german-shepherd-5-months-female-picture-id695560038?k=20&m=695560038&s=612x612&w=0&h=bX3r41zuWcsG3WbTt1UPXLYe9ex4FjKdDQTGEHRH5UI=","https://media.istockphoto.com/photos/german-shepard-puppy-picture-id520562951?k=20&m=520562951&s=612x612&w=0&h=d5iSbpG34VAX-Az9uAiEc7Cn_DVspChixbG9AB_zLvQ="]
    },
  

    {
        id: 2, 
        url: 'www.pedigree.com.ph/dog-breeds/collie', 
        breed: 'Collie', 
        snippet: 'Collies are extremely intelligent animals that genuinely enjoy human company. They are relatively easy to train and are blessed with an energetic, bouncy spirit.', link: 'https://www.pedigree.com.ph/dog-breeds/collie',
        image: ["https://media.istockphoto.com/photos/little-girl-with-her-pet-at-the-veterinarians-office-picture-id1372104882?b=1&k=20&m=1372104882&s=170667a&w=0&h=o7riTQ6y5HI4lCz0e9XArGyOQLU1VTkTgpYk50vBNyk=","https://media.istockphoto.com/photos/little-girl-with-her-pet-at-the-veterinarians-office-picture-id1372104882?b=1&k=20&m=1372104882&s=170667a&w=0&h=o7riTQ6y5HI4lCz0e9XArGyOQLU1VTkTgpYk50vBNyk=","https://media.istockphoto.com/photos/purebred-german-shepherd-puppy-lies-on-the-sidewalk-against-a-wooden-picture-id1358309706?k=20&m=1358309706&s=612x612&w=0&h=BdBsa8qSeA2BMrlD6GX3q_HnmEvul5raD594ULygZ5k=","https://media.istockphoto.com/photos/german-shepherd-picture-id1220546837?k=20&m=1220546837&s=612x612&w=0&h=EV2m3PoiTN9FY5WDjEa8BmovsgOMscHb2FP9f-DA5gk=","https://media.istockphoto.com/photos/faithful-looking-mixed-breed-dog-picture-id1068303132?k=20&m=1068303132&s=612x612&w=0&h=0fEhA3_YdfSxn-lQLAXdyROHrpUEyX2UtLvdvemXJCk=","https://media.istockphoto.com/photos/puppy-german-shepherd-5-months-female-picture-id695560038?k=20&m=695560038&s=612x612&w=0&h=bX3r41zuWcsG3WbTt1UPXLYe9ex4FjKdDQTGEHRH5UI=","https://media.istockphoto.com/photos/puppy-german-shepherd-5-months-female-picture-id695560038?k=20&m=695560038&s=612x612&w=0&h=bX3r41zuWcsG3WbTt1UPXLYe9ex4FjKdDQTGEHRH5UI=","https://media.istockphoto.com/photos/german-shepard-puppy-picture-id520562951?k=20&m=520562951&s=612x612&w=0&h=d5iSbpG34VAX-Az9uAiEc7Cn_DVspChixbG9AB_zLvQ="]
    },
        
    {
        id: 3, 
        url: 'www.pedigree.com.ph/dog-breeds/golden-retriever', 
        breed: 'Golden Retriever', 
        snippet: 'Golden Retrievers are one of the most fun-loving dogs and love showering affection on their owners. A Golden Retriever\'s temperament is extremely friendly, and they behave well around children.', 
        link: 'https://www.pedigree.com.ph/dog-breeds/golden-retriever',
        image: ["https://media.istockphoto.com/photos/little-girl-with-her-pet-at-the-veterinarians-office-picture-id1372104882?b=1&k=20&m=1372104882&s=170667a&w=0&h=o7riTQ6y5HI4lCz0e9XArGyOQLU1VTkTgpYk50vBNyk=","https://media.istockphoto.com/photos/little-girl-with-her-pet-at-the-veterinarians-office-picture-id1372104882?b=1&k=20&m=1372104882&s=170667a&w=0&h=o7riTQ6y5HI4lCz0e9XArGyOQLU1VTkTgpYk50vBNyk=","https://media.istockphoto.com/photos/purebred-german-shepherd-puppy-lies-on-the-sidewalk-against-a-wooden-picture-id1358309706?k=20&m=1358309706&s=612x612&w=0&h=BdBsa8qSeA2BMrlD6GX3q_HnmEvul5raD594ULygZ5k=","https://media.istockphoto.com/photos/german-shepherd-picture-id1220546837?k=20&m=1220546837&s=612x612&w=0&h=EV2m3PoiTN9FY5WDjEa8BmovsgOMscHb2FP9f-DA5gk=","https://media.istockphoto.com/photos/faithful-looking-mixed-breed-dog-picture-id1068303132?k=20&m=1068303132&s=612x612&w=0&h=0fEhA3_YdfSxn-lQLAXdyROHrpUEyX2UtLvdvemXJCk=","https://media.istockphoto.com/photos/puppy-german-shepherd-5-months-female-picture-id695560038?k=20&m=695560038&s=612x612&w=0&h=bX3r41zuWcsG3WbTt1UPXLYe9ex4FjKdDQTGEHRH5UI=","https://media.istockphoto.com/photos/puppy-german-shepherd-5-months-female-picture-id695560038?k=20&m=695560038&s=612x612&w=0&h=bX3r41zuWcsG3WbTt1UPXLYe9ex4FjKdDQTGEHRH5UI=","https://media.istockphoto.com/photos/german-shepard-puppy-picture-id520562951?k=20&m=520562951&s=612x612&w=0&h=d5iSbpG34VAX-Az9uAiEc7Cn_DVspChixbG9AB_zLvQ="]
    },
       
    {
        id: 4, 
        url: 'www.pedigree.com.ph/dog-breeds/pug', 
        breed: 'Pug', 
        snippet: 'A pug\'s temperament is always friendly and cheerful. They make great companion dogs and love being by their owner\'s side all the time.', 
        link: 'https://www.pedigree.com.ph/dog-breeds/pug',
        image: ["https://media.istockphoto.com/photos/little-girl-with-her-pet-at-the-veterinarians-office-picture-id1372104882?b=1&k=20&m=1372104882&s=170667a&w=0&h=o7riTQ6y5HI4lCz0e9XArGyOQLU1VTkTgpYk50vBNyk=","https://media.istockphoto.com/photos/little-girl-with-her-pet-at-the-veterinarians-office-picture-id1372104882?b=1&k=20&m=1372104882&s=170667a&w=0&h=o7riTQ6y5HI4lCz0e9XArGyOQLU1VTkTgpYk50vBNyk=","https://media.istockphoto.com/photos/purebred-german-shepherd-puppy-lies-on-the-sidewalk-against-a-wooden-picture-id1358309706?k=20&m=1358309706&s=612x612&w=0&h=BdBsa8qSeA2BMrlD6GX3q_HnmEvul5raD594ULygZ5k=","https://media.istockphoto.com/photos/german-shepherd-picture-id1220546837?k=20&m=1220546837&s=612x612&w=0&h=EV2m3PoiTN9FY5WDjEa8BmovsgOMscHb2FP9f-DA5gk=","https://media.istockphoto.com/photos/faithful-looking-mixed-breed-dog-picture-id1068303132?k=20&m=1068303132&s=612x612&w=0&h=0fEhA3_YdfSxn-lQLAXdyROHrpUEyX2UtLvdvemXJCk=","https://media.istockphoto.com/photos/puppy-german-shepherd-5-months-female-picture-id695560038?k=20&m=695560038&s=612x612&w=0&h=bX3r41zuWcsG3WbTt1UPXLYe9ex4FjKdDQTGEHRH5UI=","https://media.istockphoto.com/photos/puppy-german-shepherd-5-months-female-picture-id695560038?k=20&m=695560038&s=612x612&w=0&h=bX3r41zuWcsG3WbTt1UPXLYe9ex4FjKdDQTGEHRH5UI=","https://media.istockphoto.com/photos/german-shepard-puppy-picture-id520562951?k=20&m=520562951&s=612x612&w=0&h=d5iSbpG34VAX-Az9uAiEc7Cn_DVspChixbG9AB_zLvQ="]
    },
     
    {
        id: 5, 
        url: 'www.pedigree.com.ph/dog-breeds/yorkshire-terrier', 
        breed: 'Yorkshire Terrier', 
        snippet: 'Most Yorkshire Terriers are alert, active and inquisitive. They can be determined, but are faithful and loyal to their human family. They thrive on human companionship and will happily be included in family activities.', 
        link: 'https://www.pedigree.com.ph/dog-breeds/yorkshire-terrier',
        image: ["https://media.istockphoto.com/photos/little-girl-with-her-pet-at-the-veterinarians-office-picture-id1372104882?b=1&k=20&m=1372104882&s=170667a&w=0&h=o7riTQ6y5HI4lCz0e9XArGyOQLU1VTkTgpYk50vBNyk=","https://media.istockphoto.com/photos/little-girl-with-her-pet-at-the-veterinarians-office-picture-id1372104882?b=1&k=20&m=1372104882&s=170667a&w=0&h=o7riTQ6y5HI4lCz0e9XArGyOQLU1VTkTgpYk50vBNyk=","https://media.istockphoto.com/photos/purebred-german-shepherd-puppy-lies-on-the-sidewalk-against-a-wooden-picture-id1358309706?k=20&m=1358309706&s=612x612&w=0&h=BdBsa8qSeA2BMrlD6GX3q_HnmEvul5raD594ULygZ5k=","https://media.istockphoto.com/photos/german-shepherd-picture-id1220546837?k=20&m=1220546837&s=612x612&w=0&h=EV2m3PoiTN9FY5WDjEa8BmovsgOMscHb2FP9f-DA5gk=","https://media.istockphoto.com/photos/faithful-looking-mixed-breed-dog-picture-id1068303132?k=20&m=1068303132&s=612x612&w=0&h=0fEhA3_YdfSxn-lQLAXdyROHrpUEyX2UtLvdvemXJCk=","https://media.istockphoto.com/photos/puppy-german-shepherd-5-months-female-picture-id695560038?k=20&m=695560038&s=612x612&w=0&h=bX3r41zuWcsG3WbTt1UPXLYe9ex4FjKdDQTGEHRH5UI=","https://media.istockphoto.com/photos/puppy-german-shepherd-5-months-female-picture-id695560038?k=20&m=695560038&s=612x612&w=0&h=bX3r41zuWcsG3WbTt1UPXLYe9ex4FjKdDQTGEHRH5UI=","https://media.istockphoto.com/photos/german-shepard-puppy-picture-id520562951?k=20&m=520562951&s=612x612&w=0&h=d5iSbpG34VAX-Az9uAiEc7Cn_DVspChixbG9AB_zLvQ="]
    },
       
    {
        id: 6, 
        url: 'www.pedigree.com.ph/dog-breeds/jack-russel', 
        breed: 'Jack Russel', 
        snippet: 'Jack Russell Terriers are great little hunting dogs that will tackle anything from a fox to a mouse.', 
        link: 'https://www.pedigree.com.ph/dog-breeds/jack-russell',
        image: ["https://media.istockphoto.com/photos/little-girl-with-her-pet-at-the-veterinarians-office-picture-id1372104882?b=1&k=20&m=1372104882&s=170667a&w=0&h=o7riTQ6y5HI4lCz0e9XArGyOQLU1VTkTgpYk50vBNyk=","https://media.istockphoto.com/photos/little-girl-with-her-pet-at-the-veterinarians-office-picture-id1372104882?b=1&k=20&m=1372104882&s=170667a&w=0&h=o7riTQ6y5HI4lCz0e9XArGyOQLU1VTkTgpYk50vBNyk=","https://media.istockphoto.com/photos/purebred-german-shepherd-puppy-lies-on-the-sidewalk-against-a-wooden-picture-id1358309706?k=20&m=1358309706&s=612x612&w=0&h=BdBsa8qSeA2BMrlD6GX3q_HnmEvul5raD594ULygZ5k=","https://media.istockphoto.com/photos/german-shepherd-picture-id1220546837?k=20&m=1220546837&s=612x612&w=0&h=EV2m3PoiTN9FY5WDjEa8BmovsgOMscHb2FP9f-DA5gk=","https://media.istockphoto.com/photos/faithful-looking-mixed-breed-dog-picture-id1068303132?k=20&m=1068303132&s=612x612&w=0&h=0fEhA3_YdfSxn-lQLAXdyROHrpUEyX2UtLvdvemXJCk=","https://media.istockphoto.com/photos/puppy-german-shepherd-5-months-female-picture-id695560038?k=20&m=695560038&s=612x612&w=0&h=bX3r41zuWcsG3WbTt1UPXLYe9ex4FjKdDQTGEHRH5UI=","https://media.istockphoto.com/photos/puppy-german-shepherd-5-months-female-picture-id695560038?k=20&m=695560038&s=612x612&w=0&h=bX3r41zuWcsG3WbTt1UPXLYe9ex4FjKdDQTGEHRH5UI=","https://media.istockphoto.com/photos/german-shepard-puppy-picture-id520562951?k=20&m=520562951&s=612x612&w=0&h=d5iSbpG34VAX-Az9uAiEc7Cn_DVspChixbG9AB_zLvQ="]
    },
      
    {
        id: 7, 
        url: 'www.pedigree.com.ph/dog-breeds/finnish-spitz', 
        breed: 'Finnish Spitz', 
        snippet: 'This lively and independent dog will get along with just about everybody (including children) and everything (including other pets) in the house. It is bright, alert and can make an excellent guard dog.', 
        link: 'https://www.pedigree.com.ph/dog-breeds/finnish-spitz',
        image: ["https://media.istockphoto.com/photos/little-girl-with-her-pet-at-the-veterinarians-office-picture-id1372104882?b=1&k=20&m=1372104882&s=170667a&w=0&h=o7riTQ6y5HI4lCz0e9XArGyOQLU1VTkTgpYk50vBNyk=","https://media.istockphoto.com/photos/little-girl-with-her-pet-at-the-veterinarians-office-picture-id1372104882?b=1&k=20&m=1372104882&s=170667a&w=0&h=o7riTQ6y5HI4lCz0e9XArGyOQLU1VTkTgpYk50vBNyk=","https://media.istockphoto.com/photos/purebred-german-shepherd-puppy-lies-on-the-sidewalk-against-a-wooden-picture-id1358309706?k=20&m=1358309706&s=612x612&w=0&h=BdBsa8qSeA2BMrlD6GX3q_HnmEvul5raD594ULygZ5k=","https://media.istockphoto.com/photos/german-shepherd-picture-id1220546837?k=20&m=1220546837&s=612x612&w=0&h=EV2m3PoiTN9FY5WDjEa8BmovsgOMscHb2FP9f-DA5gk=","https://media.istockphoto.com/photos/faithful-looking-mixed-breed-dog-picture-id1068303132?k=20&m=1068303132&s=612x612&w=0&h=0fEhA3_YdfSxn-lQLAXdyROHrpUEyX2UtLvdvemXJCk=","https://media.istockphoto.com/photos/puppy-german-shepherd-5-months-female-picture-id695560038?k=20&m=695560038&s=612x612&w=0&h=bX3r41zuWcsG3WbTt1UPXLYe9ex4FjKdDQTGEHRH5UI=","https://media.istockphoto.com/photos/puppy-german-shepherd-5-months-female-picture-id695560038?k=20&m=695560038&s=612x612&w=0&h=bX3r41zuWcsG3WbTt1UPXLYe9ex4FjKdDQTGEHRH5UI=","https://media.istockphoto.com/photos/german-shepard-puppy-picture-id520562951?k=20&m=520562951&s=612x612&w=0&h=d5iSbpG34VAX-Az9uAiEc7Cn_DVspChixbG9AB_zLvQ="]
    },
      
    {
        id: 8, 
        url: 'www.pedigree.com.ph/dog-breeds/labrador', 
        breed: 'Labrador', 
        snippet: 'Labrador dogs are popularly known for their calm temperament. They love showering affection on their owners and people they know or are close to. These dogs gel up well with all the members of the house and are safe around children as well.', 
        link: 'https://www.pedigree.com.ph/dog-breeds/labrador', image: ["https://media.istockphoto.com/photos/little-girl-with-her-pet-at-the-veterinarians-office-picture-id1372104882?b=1&k=20&m=1372104882&s=170667a&w=0&h=o7riTQ6y5HI4lCz0e9XArGyOQLU1VTkTgpYk50vBNyk=","https://media.istockphoto.com/photos/little-girl-with-her-pet-at-the-veterinarians-office-picture-id1372104882?b=1&k=20&m=1372104882&s=170667a&w=0&h=o7riTQ6y5HI4lCz0e9XArGyOQLU1VTkTgpYk50vBNyk=","https://media.istockphoto.com/photos/purebred-german-shepherd-puppy-lies-on-the-sidewalk-against-a-wooden-picture-id1358309706?k=20&m=1358309706&s=612x612&w=0&h=BdBsa8qSeA2BMrlD6GX3q_HnmEvul5raD594ULygZ5k=","https://media.istockphoto.com/photos/german-shepherd-picture-id1220546837?k=20&m=1220546837&s=612x612&w=0&h=EV2m3PoiTN9FY5WDjEa8BmovsgOMscHb2FP9f-DA5gk=","https://media.istockphoto.com/photos/faithful-looking-mixed-breed-dog-picture-id1068303132?k=20&m=1068303132&s=612x612&w=0&h=0fEhA3_YdfSxn-lQLAXdyROHrpUEyX2UtLvdvemXJCk=","https://media.istockphoto.com/photos/puppy-german-shepherd-5-months-female-picture-id695560038?k=20&m=695560038&s=612x612&w=0&h=bX3r41zuWcsG3WbTt1UPXLYe9ex4FjKdDQTGEHRH5UI=","https://media.istockphoto.com/photos/puppy-german-shepherd-5-months-female-picture-id695560038?k=20&m=695560038&s=612x612&w=0&h=bX3r41zuWcsG3WbTt1UPXLYe9ex4FjKdDQTGEHRH5UI=","https://media.istockphoto.com/photos/german-shepard-puppy-picture-id520562951?k=20&m=520562951&s=612x612&w=0&h=d5iSbpG34VAX-Az9uAiEc7Cn_DVspChixbG9AB_zLvQ="]
    },
    
    {
        id: 9, 
        url: 'www.pedigree.com.ph/dog-breeds/maltese', 
        breed: 'Maltese', 
        snippet: 'Maltese dogs’ temperament is friendly and gentle. They are intelligent dogs who have a fun streak in them as well. They have moderate energy levels and like having fun and goofing around. You cannot expect a Maltese dog to be quiet.', 
        link: 'https://www.pedigree.com.ph/dog-breeds/maltese',
        image: ["https://media.istockphoto.com/photos/little-girl-with-her-pet-at-the-veterinarians-office-picture-id1372104882?b=1&k=20&m=1372104882&s=170667a&w=0&h=o7riTQ6y5HI4lCz0e9XArGyOQLU1VTkTgpYk50vBNyk=","https://media.istockphoto.com/photos/little-girl-with-her-pet-at-the-veterinarians-office-picture-id1372104882?b=1&k=20&m=1372104882&s=170667a&w=0&h=o7riTQ6y5HI4lCz0e9XArGyOQLU1VTkTgpYk50vBNyk=","https://media.istockphoto.com/photos/purebred-german-shepherd-puppy-lies-on-the-sidewalk-against-a-wooden-picture-id1358309706?k=20&m=1358309706&s=612x612&w=0&h=BdBsa8qSeA2BMrlD6GX3q_HnmEvul5raD594ULygZ5k=","https://media.istockphoto.com/photos/german-shepherd-picture-id1220546837?k=20&m=1220546837&s=612x612&w=0&h=EV2m3PoiTN9FY5WDjEa8BmovsgOMscHb2FP9f-DA5gk=","https://media.istockphoto.com/photos/faithful-looking-mixed-breed-dog-picture-id1068303132?k=20&m=1068303132&s=612x612&w=0&h=0fEhA3_YdfSxn-lQLAXdyROHrpUEyX2UtLvdvemXJCk=","https://media.istockphoto.com/photos/puppy-german-shepherd-5-months-female-picture-id695560038?k=20&m=695560038&s=612x612&w=0&h=bX3r41zuWcsG3WbTt1UPXLYe9ex4FjKdDQTGEHRH5UI=","https://media.istockphoto.com/photos/puppy-german-shepherd-5-months-female-picture-id695560038?k=20&m=695560038&s=612x612&w=0&h=bX3r41zuWcsG3WbTt1UPXLYe9ex4FjKdDQTGEHRH5UI=","https://media.istockphoto.com/photos/german-shepard-puppy-picture-id520562951?k=20&m=520562951&s=612x612&w=0&h=d5iSbpG34VAX-Az9uAiEc7Cn_DVspChixbG9AB_zLvQ="]
    },
  
    {
        id: 10, 
        url: 'www.pedigree.com.ph/dog-breeds/pomeranian', 
        breed: 'Pomeranian', 
        snippet: 'Pomeranians’ temperament is quite friendly. They are full of energy and love playing outdoors, too. Walking them regularly is recommended to keep them healthy and fit.', 
        link: 'https://www.pedigree.com.ph/dog-breeds/pomeranian',
        image: ["https://media.istockphoto.com/photos/little-girl-with-her-pet-at-the-veterinarians-office-picture-id1372104882?b=1&k=20&m=1372104882&s=170667a&w=0&h=o7riTQ6y5HI4lCz0e9XArGyOQLU1VTkTgpYk50vBNyk=","https://media.istockphoto.com/photos/little-girl-with-her-pet-at-the-veterinarians-office-picture-id1372104882?b=1&k=20&m=1372104882&s=170667a&w=0&h=o7riTQ6y5HI4lCz0e9XArGyOQLU1VTkTgpYk50vBNyk=","https://media.istockphoto.com/photos/purebred-german-shepherd-puppy-lies-on-the-sidewalk-against-a-wooden-picture-id1358309706?k=20&m=1358309706&s=612x612&w=0&h=BdBsa8qSeA2BMrlD6GX3q_HnmEvul5raD594ULygZ5k=","https://media.istockphoto.com/photos/german-shepherd-picture-id1220546837?k=20&m=1220546837&s=612x612&w=0&h=EV2m3PoiTN9FY5WDjEa8BmovsgOMscHb2FP9f-DA5gk=","https://media.istockphoto.com/photos/faithful-looking-mixed-breed-dog-picture-id1068303132?k=20&m=1068303132&s=612x612&w=0&h=0fEhA3_YdfSxn-lQLAXdyROHrpUEyX2UtLvdvemXJCk=","https://media.istockphoto.com/photos/puppy-german-shepherd-5-months-female-picture-id695560038?k=20&m=695560038&s=612x612&w=0&h=bX3r41zuWcsG3WbTt1UPXLYe9ex4FjKdDQTGEHRH5UI=","https://media.istockphoto.com/photos/puppy-german-shepherd-5-months-female-picture-id695560038?k=20&m=695560038&s=612x612&w=0&h=bX3r41zuWcsG3WbTt1UPXLYe9ex4FjKdDQTGEHRH5UI=","https://media.istockphoto.com/photos/german-shepard-puppy-picture-id520562951?k=20&m=520562951&s=612x612&w=0&h=d5iSbpG34VAX-Az9uAiEc7Cn_DVspChixbG9AB_zLvQ="]
    

    }
]
    

module.exports = dogs;
