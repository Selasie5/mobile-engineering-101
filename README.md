"I haven't got to the point where I can call myself a mobile engineer, but here are some notes "


-When using expo router, you can delete the index.ts or App.tsx fiole since they won't be referenced in anyway as the entry point

-Don't forget to change the main entry point to  "expo-router/entry"  which will make the app reference your index.tsx in your app folder as the entry point


-Also for deep linking purposes, add the  
``"scheme": "your-app-name"``
this will enable anybody reference your particular app using this 


-Use Stack instead of Slot (all from expo-router ) to enable you have a default navigation through your app .i.e. having a default back button to move to the previous page before the current one, works pretty much like the stack data structure


--Stack or slot are like {children}  in react or next , the concepts of layouts are the same, just that the file name  for react native is _layout.tsx and must obviously be in the app folder
