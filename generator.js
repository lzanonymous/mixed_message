const sentences={
    subjects:['faith','pet','lover','partner','friend','family','career','hobby'],
    verbs:['takes away','increases','decreases','leads to','brings','owns','represents','generates'],
    objects:['Love','Wealth','Fortune','Freedom','Hatred','Happiness','Silence','Calm',
    'Desire','Alarm','Success','Failure','Sadness','Danger','Risk','Challenge','Confidence','Fun'],
    random_subject: function(){
        return this.subjects[Math.floor(Math.random()*this.subjects.length)]
    },
    random_verb: function(){
        return this.verbs[Math.floor(Math.random()*this.verbs.length)]
    },
    random_object: function(){
        return this.objects[Math.floor(Math.random()*this.objects.length)]
    },
    generate_sentence: function(){
        console.log(`Your ${this.random_subject()} ${this.random_verb()} ${this.random_object()}.`)
    }
}
sentences.generate_sentence()