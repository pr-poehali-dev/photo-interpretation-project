import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

export const GameUI = () => {
  const [health] = useState(100);
  const [money] = useState(1000);
  const [hunger, setHunger] = useState(100);
  const [energy, setEnergy] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setHunger(prev => Math.max(0, prev - 0.5));
      setEnergy(prev => Math.max(0, prev - 0.3));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="absolute top-4 left-4 z-10 space-y-2">
        <Card className="bg-card/80 backdrop-blur-sm">
          <CardContent className="p-3 space-y-2">
            <div className="flex items-center gap-2">
              <Icon name="Heart" className="text-red-500" size={20} />
              <div className="flex-1">
                <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-red-500 transition-all"
                    style={{ width: `${health}%` }}
                  />
                </div>
              </div>
              <span className="text-sm font-bold">{health}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Icon name="Utensils" className="text-orange-500" size={20} />
              <div className="flex-1">
                <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-orange-500 transition-all"
                    style={{ width: `${hunger}%` }}
                  />
                </div>
              </div>
              <span className="text-sm font-bold">{Math.round(hunger)}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-yellow-500" size={20} />
              <div className="flex-1">
                <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-yellow-500 transition-all"
                    style={{ width: `${energy}%` }}
                  />
                </div>
              </div>
              <span className="text-sm font-bold">{Math.round(energy)}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/80 backdrop-blur-sm">
          <CardContent className="p-3">
            <div className="flex items-center gap-2">
              <Icon name="Coins" className="text-primary" size={20} />
              <span className="text-lg font-bold">{money} ₽</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="absolute bottom-4 right-4 z-10">
        <Card className="bg-card/80 backdrop-blur-sm w-48 h-48">
          <CardContent className="p-2 h-full flex items-center justify-center">
            <div className="relative w-full h-full border-2 border-primary/30 rounded-lg">
              <Icon name="MapPin" className="text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={24} />
              <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-red-500 rounded-full animate-pulse" />
              <div className="absolute top-2 left-2 text-xs text-muted-foreground">N</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="absolute bottom-4 left-4 z-10">
        <Card className="bg-card/80 backdrop-blur-sm">
          <CardContent className="p-3">
            <div className="text-xs text-muted-foreground space-y-1">
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-muted rounded text-xs">WASD</kbd>
                <span>Движение</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-muted rounded text-xs">Shift</kbd>
                <span>Бег</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-muted rounded text-xs">Space</kbd>
                <span>Прыжок</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-muted rounded text-xs">Mouse</kbd>
                <span>Камера</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};