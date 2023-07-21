const { Schema, model} = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimm: true,
    },
    
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      valdate: {
        validator: function (v) {
          return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
            v
          );
        },
      },
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true, 
    },
    id: false,
  });

userSchema.virtual('friendCount').get(function(){
  return this.friends.length;
});


module.exports = model("User", userSchema);

