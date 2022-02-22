function Main({children}) {
  return ( 
    <main>
      <div className="container mx-auto p-4 text-center divide-y-2 space-y-4">
        {children}
      </div>
    </main>
   );
}

export default Main;