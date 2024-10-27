const Heading = () => {
    return (
      <div className="max-w-3xl mx-auto text-center mt-16">
        <h1 className="text-4xl font-bold leading-tight mb-2 pb-4 relative">
          <span className="bg-clip-text">
            Search List
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1" />
        </h1>
        <p className="text-lg mb-8">
          Una funcion con React para filtrar items de una lista.
        </p>
      </div>
    )
}

export default Heading;